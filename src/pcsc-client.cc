/******************************************************************************
 *                                                                            *
 * @file pcsc-client.cc                                                       *
 * @author Clément Désiles <clement.desiles@telecomsante.com>                 *
 * @date 2013/02/14                                                           *
 * @licence MIT                                                               *
 *                                                                            *
 *****************************************************************************/

#include "pcsc-client.h"

namespace PCSC {

	/**
	 * Get the PCSC context
	 * it's kind of initialization process
	 */
	int init_context( SCARDCONTEXT &hContext ) {
		SCARD_READERSTATE readerState[1];
		readerState[0].szReader = "\\\\?PnP?\\Notification";
		readerState[0].dwCurrentState = SCARD_STATE_UNAWARE;
		LONG rv;

		// Establish context
		rv = SCardEstablishContext(SCARD_SCOPE_SYSTEM, NULL, NULL, &hContext);
		if (rv != SCARD_S_SUCCESS) {
	    	return ERROR_ESTABLISH_CXT;
		}

		// Check if Plug 'n play is supported
		rv = SCardGetStatusChange(hContext, 0, readerState, 1);
		if (readerState[0].dwEventState & SCARD_STATE_UNKNOWN) {
			return ERROR_PNP;
		}

		return CONTEXT_SET;
	}


	/**
	 * Update the readers list and the associated readersState list
	 * which loops over new readers states.
	 */
	int update_readers( SCARDCONTEXT &hContext, SCARD_READERSTATE *&readersState, v8::Persistent<v8::Object> &readers ){
		LONG rv;
		DWORD dwReaders = SCARD_AUTOALLOCATE;
		LPSTR mszReaders;
		LPTSTR ptr = NULL;
		int nbReaders = 0;
		int i = 0;

		// Check context
		rv = SCardIsValidContext(hContext);
		if (rv != SCARD_S_SUCCESS) {	
			return ERROR_INVALID_CXT;
		}

		// Call with the real allocated buffer
		rv = SCardListReaders(hContext, NULL, (LPTSTR)&mszReaders, &dwReaders);
		if (rv != SCARD_S_SUCCESS || mszReaders[0] == '\0') {
			readers = v8::Persistent<v8::Array>::New(v8::Array::New(0));
			SCardFreeMemory(hContext, mszReaders);
			return NO_READER_FOUND;
		}

		// Get number of readers from null separated string
		ptr = mszReaders;
		while (*ptr != '\0') {
			ptr += strlen(ptr)+1;
			nbReaders++;
		}

		// Allocate the ReaderStates table
		if (readersState) free(readersState);
		readersState = (SCARD_READERSTATE *) calloc(nbReaders, sizeof(* readersState));
		
		// Create a new readers Array
		//readers = v8::Persistent<v8::Array>::New(v8::Array::New(nbReaders));
		readers = v8::Persistent<v8::Object>::New(v8::Object::New());

		// Read the readers structure
		ptr = mszReaders;
		for (i=0; i<nbReaders; i++) {
			// For js binding
			//readers->Set(v8::Number::New(i), v8::String::New(ptr));
			readers->Set(v8::String::NewSymbol(ptr), v8::Undefined());

			// Update readers state
			readersState[i].szReader = ptr;
			readersState[i].dwCurrentState = SCARD_STATE_UNAWARE;

			// Read up to next mszReader
			ptr += strlen(ptr)+1;
		}
		// To allow PnP
		readersState[nbReaders].szReader = "\\\\?PnP?\\Notification";
		readersState[nbReaders].dwCurrentState = SCARD_STATE_UNAWARE;

		//SCardFreeMemory(hContext, mszReaders);
		return READERS_UPDATED;
	}


	/** 
	 * On status change, call the appropriate 
	 * registered functions (if there are).
	 */
	int check_card_status( SCARDCONTEXT &hContext, SCARD_READERSTATE *&readersState, v8::Persistent<v8::Object> &readers, v8::Local<v8::Function> &callback ){
		unsigned int i, nbReaders;
		DWORD evt;
		LONG rv;
		v8::Local<v8::String> status;
		v8::Local<v8::String> atrString;
		char atr[MAX_ATR_SIZE*3+1];

		// Check context
		rv = SCardIsValidContext(hContext);
		if (rv != SCARD_S_SUCCESS) {
			// Debug purpose ONLY
			fprintf(stdout, "ERROR_INVALID_CXT\n");
			return ERROR_INVALID_CXT;
		}

		// Count readers
		nbReaders = readers->GetPropertyNames()->Length();

		// Readers state has to be filled up by update_readers
		if ( !readersState || !nbReaders ) {
			fprintf(stdout, "NO_READER_FOUND\n");
			return NO_READER_FOUND;
		}

		// Check status
		rv = SCardGetStatusChange(hContext, INFINITE, readersState, nbReaders);
		if ((rv == SCARD_S_SUCCESS) || (rv == SCARD_E_TIMEOUT)) {

			// Get the event issuer (card reader)
			for (i=0; i<nbReaders; i++) {
				evt = readersState[i].dwEventState;
				if (evt & SCARD_STATE_CHANGED) {
					// New state is now the current state
					readersState[i].dwCurrentState = evt;
				} else {
					// Nothing changed, then skip to the next reader
					continue;
				}

				// Reader id: i, reader name: readersState[i].szReader
				if (evt & SCARD_STATE_IGNORE) status = v8::String::New("SCARD_STATE_IGNORE");
				if (evt & SCARD_STATE_UNKNOWN) status = v8::String::New("SCARD_STATE_UNKNOWN");
				if (evt & SCARD_STATE_UNAVAILABLE) status = v8::String::New("SCARD_STATE_UNAVAILABLE");
				if (evt & SCARD_STATE_EMPTY) status = v8::String::New("SCARD_STATE_EMPTY");
				if (evt & SCARD_STATE_PRESENT) status = v8::String::New("SCARD_STATE_PRESENT");
				if (evt & SCARD_STATE_ATRMATCH) status = v8::String::New("SCARD_STATE_ATRMATCH");
				if (evt & SCARD_STATE_EXCLUSIVE) status = v8::String::New("SCARD_STATE_EXCLUSIVE");
				if (evt & SCARD_STATE_INUSE) status = v8::String::New("SCARD_STATE_INUSE");
				if (evt & SCARD_STATE_MUTE) status = v8::String::New("SCARD_STATE_MUTE");

				// Dump the ATR if available
				if (readersState[i].cbAtr > 0) {
					if (readersState[i].cbAtr) {
						unsigned int j;
						for (j=0; j<readersState[i].cbAtr; j++) {
							sprintf(&atr[j*3], "%02X ", readersState[i].rgbAtr[j]);
						}
						atr[j*3-1] = '\0';
					} else {
						atr[0] = '\0';
					}
					atrString = v8::String::New(atr);
				}


				// Emit an event message
				v8::Local<v8::Object> readerObj = v8::Object::New();
				readerObj->Set(v8::String::NewSymbol("name"), readers->GetOwnPropertyNames()->Get(i));
				readerObj->Set(v8::String::NewSymbol("status"), v8::Local<v8::Value>::New(status));

				v8::Local<v8::Object> cardObj = v8::Object::New();
				if (readersState[i].cbAtr > 0) {
					cardObj->Set(v8::String::NewSymbol("ATR"), atrString);
				}

				v8::Local<v8::Object> evtMsg = v8::Object::New();
				evtMsg->Set(v8::String::NewSymbol("reader"), readerObj);
				evtMsg->Set(v8::String::NewSymbol("card"), cardObj);

				const unsigned argc = 1;
				v8::Local<v8::Value> argv[argc] = { evtMsg };
				callback->Call(v8::Context::GetCurrent()->Global(), argc, argv);

				return STATUS_CHECKED;
			}
		}

		// Simple callback to request another check later on
		const int argc = 0;
		v8::Local<v8::Value> argv[argc] = NULL;
		callback->Call(v8::Context::GetCurrent()->Global(), argc, argv);			
		return STATUS_CHECKED;
	}

} // <- end of namespace