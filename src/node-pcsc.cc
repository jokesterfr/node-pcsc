/******************************************************************************
 *                                                                            *
 * @file node-pcsc.cc                                                         *
 * @author Clément Désiles <clement.desiles@telecomsante.com>                 *
 * @date 2013/01/26                                                           *
 *                                                                            *
 * Nodejs native code binding to support the PCSC API                         *
 * PCSC handle communication with RFID readers                                *
 *                                                                            *
 * /!\ This script assume no SmartCard/RFID Reader will be added or           *
 * disconnected during runtime.                                               *
 * Please suggest a merge request if you are interested to support            *
 * that kind of feature (ie: I'm not)                                         *
 *                                                                            *
 * This code has been written thanks to this documentation:                   *
 * @see http://nodejs.org/api/addons.html                                     *
 *                                                                            *
 *****************************************************************************/

// Standard
#include <stdlib.h>

// PCSC
#include <winscard.h>

// node, V8, libub
#include <node.h>
#include <v8.h>
#include <uv.h>

// Namespaces
using namespace v8;

// Globals
SCARDCONTEXT hContext;  // PCSC context
LPSTR mszReaders;       // Readers context
Local<Array> readers;   // Readers object
Local<Array> callbacks; // Callback Array
uv_idle_t idler;        // Loop reference
SCARD_READERSTATE *readersState = NULL;
int once = 0;

// Headers
int init_context( void );
int update_readers( void );
void event_loop( uv_idle_t* handle, int loop_status );
// Handle<Value> init( const Arguments& args );
// Handle<Value> getReaders( const Arguments& args );
// Handle<Value> addCallback( const Arguments& args );
// Handle<Value> getCardInfo( const Arguments& args );
// void exitModule( void );
// void pcscModule(Handle<Object> target);

/**
 * A handy macro
 * has to be used on each exported function, so that any js dev 
 * won't misuse the set (e.g. forget the init() call)
 */
#define CHECK_CONTEXT() 												\
	LONG validate_rv = SCardIsValidContext(hContext); 					\
	if(validate_rv != SCARD_S_SUCCESS) {								\
		Local<String> message = String::New("Context is not valid");	\
    	ThrowException(Exception::TypeError(message));					\
		return scope.Close( Undefined() );								\
	}
// End of CHECK_CONTENT



// ---------------------------- Native functions --------------------------- //


/**
 * Get the PCSC context
 * it's kind of initialization process
 *
 * @return {int} 0 for success, 1 otherwise
 */
int init_context( void ) {
	HandleScope scope;
	SCARD_READERSTATE readerState[1];
	readerState[0].szReader = "\\\\?PnP?\\Notification";
	readerState[0].dwCurrentState = SCARD_STATE_UNAWARE;
	LONG rv;

	// Establish context
	rv = SCardEstablishContext(SCARD_SCOPE_SYSTEM, NULL, NULL, &hContext);
	if (rv != SCARD_S_SUCCESS) {
		Local<String> message = String::New("Cannot establish context");
    	ThrowException(Exception::TypeError(message));
   		return 1;
	}

	// Check if Plung 'n play is supported
	rv = SCardGetStatusChange(hContext, 0, readerState, 1);
	if (readerState[0].dwEventState & SCARD_STATE_UNKNOWN) {
		Local<String> message = String::New("Unsupported PnP");
    	ThrowException(Exception::TypeError(message));
    	return 1;
	}

	// Update the readers list
	if (update_readers())
		return 1;

	// Init callbacks (ie: prevent multiple init calls)
	callbacks = Array::New(0);

	//Setup and start event loop
	if (once == 0) {
	    uv_idle_init(uv_default_loop(), &idler);
	    uv_idle_start(&idler, event_loop);
		once++;
	}
	return 0;
}


/**
 * Update the readers list and the associated readersState list
 * which loops over new readers states
 *
 * @return {int} 0 for success, 0 otherwise
 */
int update_readers( void ){
	LONG rv;
	DWORD dwReaders = SCARD_AUTOALLOCATE;
	LPTSTR ptr = NULL;
	int nbReaders = 0;
	int i = 0;
	
	// Call with the real allocated buffer
	rv = SCardListReaders(hContext, NULL, (LPTSTR)&mszReaders, &dwReaders);
	if (rv != SCARD_S_SUCCESS || mszReaders[0] == '\0') {
		Local<String> message = String::New("No reader found");
    	ThrowException(Exception::TypeError(message));
		return 1;
	}

	// Get number of readers from null separated string
	ptr = mszReaders;
	while (*ptr != '\0') {
		ptr += strlen(ptr)+1;
		nbReaders++;
	}

	// Create a new readers Array
	readers = Array::New(nbReaders);

	// Allocate the ReaderStates table
	if (readersState) free(readersState);
	readersState = (SCARD_READERSTATE *) calloc(nbReaders, sizeof(SCARD_READERSTATE *));
	
	// Read the readers structure
	ptr = mszReaders;
	for (i=0; i<nbReaders; i++) {
		// For js binding
		readers->Set(Number::New(i), String::New(ptr));

		// Update readers state
		readersState[i].szReader = ptr;
		readersState[i].dwCurrentState = SCARD_STATE_UNAWARE;

		// Read up to next mszReader
		ptr += strlen(ptr)+1;
	}

	Local<Object> obj = Object::New();
	obj->Set(String::NewSymbol("readers"), readers);

	return 0;
}

/** 
 * Event loop on card status change.
 * On status change, call the appropriate 
 * registered functions (if there are).
 *
 * Events send to the JS side are of this kind:
 * { readerId:0, status:["SCARD_STATE_PRESENT"] }
 *
 * @param handle {uv_idle_t*} uv reference to this loop
 * @param loop_status {int} no idea of what this is for
 */
void event_loop( uv_idle_t* handle, int loop_status ){
	DWORD evt;
	LONG rv;
	Local<Value> status;
	unsigned int i, j;
	const unsigned argc = 1;

	// Readers state has to be filled up by update_readers
	if(!readersState) update_readers();

	// Check status
	rv = SCardGetStatusChange(hContext, INFINITE, readersState, readers->Length());
	if ((rv == SCARD_S_SUCCESS) || (rv == SCARD_E_TIMEOUT)) {

		// Get the event issuer (card reader)
		for (i=0; i < readers->Length(); i++) {
			evt = readersState[i].dwEventState;
			if (evt & SCARD_STATE_CHANGED) {
				// New state is now the current state
				readersState[i].dwCurrentState = evt;
			} else {
				// Nothing changed, then skip to the next reader
				continue;
			}

			// Reader id: i, reader name: readersState[i].szReader
			if (evt & SCARD_STATE_IGNORE) status = String::New("SCARD_STATE_IGNORE");
			if (evt & SCARD_STATE_UNKNOWN) status = String::New("SCARD_STATE_UNKNOWN");
			if (evt & SCARD_STATE_UNAVAILABLE) status = String::New("SCARD_STATE_UNAVAILABLE");
			if (evt & SCARD_STATE_EMPTY) status = String::New("SCARD_STATE_EMPTY");
			if (evt & SCARD_STATE_PRESENT) status = String::New("SCARD_STATE_PRESENT");
			if (evt & SCARD_STATE_ATRMATCH) status = String::New("SCARD_STATE_ATRMATCH");
			if (evt & SCARD_STATE_EXCLUSIVE) status = String::New("SCARD_STATE_EXCLUSIVE");
			if (evt & SCARD_STATE_INUSE) status = String::New("SCARD_STATE_INUSE");
			if (evt & SCARD_STATE_MUTE) status = String::New("SCARD_STATE_MUTE");

			Local<Object> obj = Object::New();
			obj->Set(String::NewSymbol("readerId"), Number::New(i));
			obj->Set(String::NewSymbol("status"), status);

			// Call eventual registered callbacks
			Local<Function> cb;
			for (j = 0; j<callbacks->Length(); j++){
				// call callback
				Local<Value> argv[argc] = { obj };
				cb = Local<Function>::Cast(callbacks->Get(Integer::New(i)));
				cb ->Call(Context::GetCurrent()->Global(), argc, argv);
			}

		} // Next reader loop
	} // End of fired event block
}

// ---------------------------- Nodejs Bindings ---------------------------- //

/**
 * Call the initialization process
 *
 * @param args {v8::Argument} unused
 * @return {v8::Boolean} aknowledgement
 */
Handle<Value> init( const Arguments& args ) {
	HandleScope scope;
	if ( init_context() )
    	return scope.Close( True() );
	else 
		return scope.Close( False() );
}


/**
 * Get the list of available SmartCard/RFID readers
 *
 * @param args {v8::Argument} unused input
 * @return {v8::Array} list of available readers
 */
Handle<Value> getReaders( const Arguments& args ) {
	HandleScope scope;
	CHECK_CONTEXT();

	if ( !update_readers() )
		return scope.Close( readers );
	else
		return scope.Close( Undefined() );
}

/* 
 * Add a new function as to be notified when an 
 * event occur on readers
 *
 * @param {v8::Argument}
 * @return {v8::Value} unused
 */
Handle<Value> addCallback( const Arguments& args ){
	HandleScope scope;
	CHECK_CONTEXT();	

	Local<Function> cb = Local<Function>::Cast(args[0]);
	Local<Array> tmp;
	unsigned int i;

	if ( callbacks->Length() > 0 ){
		tmp = Array::New(callbacks->Length()+1);
		for (i = 0; i<callbacks->Length(); i++){
			tmp->Get(Integer::New(i)) = callbacks->Get(Integer::New(i));
		}
	} else {
		tmp = Array::New(1);
	}
	tmp->Get(Integer::New(tmp->Length()-1)) = cb;
	callbacks = tmp;

	return scope.Close( Undefined() );
}

/**
 * Return the info we can retrieve from connected card 
 *
 * @param {v8::Arguments} args[0] may contain the reader id
 * @return {v8::Object} card properties we could get
 */
Handle<Value> getCardInfo( const Arguments& args ){
	HandleScope scope;
	CHECK_CONTEXT();
	// // Also dump the ATR if available
	// if (readersState[i].cbAtr > 0) {
	// 	printf("  ATR: ");
	// 	if (readersState[i].cbAtr) {
	// 		unsigned int j;
	// 		for (j=0; j<readersState[i].cbAtr; j++) {
	// 			sprintf(&atr[j*3], "%02X ", readersState[i].rgbAtr[j]);
	// 		}
	// 		atr[j*3-1] = '\0';
	// 	} else {
	// 		atr[0] = '\0';
	// 	}

	// 	// 	printf("\n");
	// 	// 	sprintf(atr_command, "ATR_analysis" " '%s'", atr);
	// 	// 	if (system(atr_command)) {
	// 	// 		perror(atr_command);
	// 	// 	}
	// }
	return scope.Close( Undefined() );
}

/**
 * Free some stuff on exit
 * @return none
 */
void exitModule( void * args ){
    // Free things
	free(readersState);
	SCardFreeMemory(hContext, mszReaders);
	SCardReleaseContext(hContext);
}

/**
 * Module export
 * @return none
 */
void pcscModule(Handle<Object> target) {
	NODE_SET_METHOD(target, "init", init);
	NODE_SET_METHOD(target, "getReaders", getReaders);
	NODE_SET_METHOD(target, "addCallback", addCallback);
	NODE_SET_METHOD(target, "getCardInfo", getCardInfo);
	node::AtExit(&exitModule);
}

NODE_MODULE(pcsc, pcscModule)