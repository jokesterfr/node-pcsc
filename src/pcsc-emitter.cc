/******************************************************************************
 *                                                                            *
 * @file pcsc-emitter.cc                                                      *
 * @author Clément Désiles <clement.desiles@telecomsante.com>                 *
 * @date 2013/02/14                                                           *
 * @licence MIT                                                               *
 *                                                                            *
 *****************************************************************************/

#include "pcsc-emitter.h"

using namespace v8;

PCSCEmitter::PCSCEmitter() {}
PCSCEmitter::~PCSCEmitter() {
	delete [] _readers_state;
	_readers.Dispose();
	_readers.Clear();
	PCSC::release_context( _scard_context );
	fprintf(stdout, "Destructor called -> done\n");
}

/** 
 * Export PCSCEmitter to Node module
 */
void PCSCEmitter::Init( Handle<Object> target ) {
	// Prepare constructor template
	Local<FunctionTemplate> tpl = FunctionTemplate::New(New);
	tpl->InstanceTemplate()->SetInternalFieldCount(1);

	// Add methods to the prototype
	tpl->PrototypeTemplate()->Set(String::NewSymbol("getReaders"),
		FunctionTemplate::New(getReaders)->GetFunction());
	tpl->PrototypeTemplate()->Set(String::NewSymbol("scardRead"),
		FunctionTemplate::New(scardRead)->GetFunction());

	Persistent<Function> cstr = Persistent<Function>::New(tpl->GetFunction());
  	target->Set(String::NewSymbol("PCSC"), cstr);
}


/**
 * V8-style constructor for PCSCEmitter
 * Wraps the PCSC context into the PCSCEmitter
 */
Handle<Value> PCSCEmitter::New( const Arguments& args ) {
	HandleScope scope;

	// Instanciate a new PCSCEmitter
	assert(args.IsConstructCall());
	PCSCEmitter *self = new PCSCEmitter();

	// Null the readers state pointer
	self->_readers_state = NULL;

	// Init the PCSC context
	switch ( PCSC::init_context( self->_scard_context ) ){
		case PCSC::ERROR_ESTABLISH_CXT:
			ThrowException(Exception::TypeError(String::New("Cannot establish context")));
			return scope.Close(Undefined());
		case PCSC::ERROR_PNP:
			ThrowException(Exception::TypeError(String::New("PnP is not supported")));
			return scope.Close(Undefined());
	}

	// Update readers
	int res = PCSC::update_readers( self->_scard_context, 
								    self->_readers_state,
								    self->_readers );		

	// TODO: se séparer des codes d'erreur : utiliser pcsc_stringify_error
	// Interprete the updating result
	switch ( res ) {
		case PCSC::ERROR_INVALID_CXT: 
			ThrowException(
				Exception::TypeError(String::New("Cannot establish context"))
			);
			return scope.Close(Undefined());
	};


	// Wrap instance and close scope
	self->Wrap(args.This());
	return scope.Close(args.This());
}

/**
 * Check scardPoll events, and eventually emit scardPoll event
 * @param args {v8::Argument}
 * @return {v8::Undefined}
 */
Handle<Value> PCSCEmitter::scardRead( const Arguments& args ) {
	HandleScope scope;

	// Callback to reenter in the scardRead loop
	if ( args[0]->ToObject()->IsFunction() ){
		Local<Function> callback = Local<Function>::Cast(args[0]);
		//Read status (blocking operation)
		PCSCEmitter* self = ObjectWrap::Unwrap<PCSCEmitter>(args.This());
		PCSC::check_card_status( self->_scard_context,
								 self->_readers_state,
								 self->_readers,
								 callback );
	} else {
		ThrowException(
			Exception::TypeError(String::New("`scardRead` require a callback parameter"))
		);
	}
	return scope.Close( Undefined() );
}

/**
 * Get the list of available SmartCard/RFID readers
 *
 * @param args {v8::Argument}
 * @return {v8::Array} list of available readers
 */
Handle<Value> PCSCEmitter::getReaders( const Arguments& args ) {
	HandleScope scope;

	// Unwrap PCSC context
	PCSCEmitter* self = ObjectWrap::Unwrap<PCSCEmitter>(args.This());

	// Close scope returning readers
	return scope.Close( self->_readers );
}