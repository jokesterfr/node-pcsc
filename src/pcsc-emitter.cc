/******************************************************************************
 *                                                                            *
 * @file pcsc-emitter.cc                                                      *
 * @author Clément Désiles <clement.desiles@telecomsante.com>                 *
 * @date 2013/02/14                                                           *
 * @licence MIT                                                               *
 *                                                                            *
 *****************************************************************************/

#include <node.h>

#include "pcsc-emitter.h"

using namespace v8;

Persistent<Function> PCSCEmitter::constructor;

PCSCEmitter::PCSCEmitter() {}
PCSCEmitter::~PCSCEmitter() {
  delete [] _readers_state;
  _readers.Reset();
  PCSC::release_context( _scard_context );
  fprintf(stdout, "Destructor called -> done\n");
}

/** 
 * Export PCSCEmitter to Node module
 */
void PCSCEmitter::Init( Local<Object> exports) {
	Isolate* isolate = exports->GetIsolate();

  // Prepare constructor template
  Local<FunctionTemplate> tpl = FunctionTemplate::New(isolate, New);
  tpl->SetClassName(String::NewFromUtf8(isolate, "PCSCEmitter"));
  tpl->InstanceTemplate()->SetInternalFieldCount(1);

  // Add methods to the prototype
  NODE_SET_PROTOTYPE_METHOD(tpl, "getReaders", getReaders);
  NODE_SET_PROTOTYPE_METHOD(tpl, "scardRead", scardRead);

  constructor.Reset(isolate, tpl->GetFunction());
  exports->Set(String::NewFromUtf8(isolate, "PCSC"), tpl->GetFunction());
}


/**
 * V8-style constructor for PCSCEmitter
 * Wraps the PCSC context into the PCSCEmitter
 */
void PCSCEmitter::New(const v8::FunctionCallbackInfo<v8::Value>& info) {
	Isolate* isolate = info.GetIsolate();
	HandleScope scope(isolate);

	assert(info.IsConstructCall());
	PCSCEmitter* self = new PCSCEmitter();

	// Null the readers state pointer
	self->_readers_state = NULL;

	// Init the PCSC context
	switch (PCSC::init_context(self->_scard_context)) {
	case PCSC::ERROR_ESTABLISH_CXT:
		isolate->ThrowException(Exception::TypeError(String::NewFromUtf8(isolate, "Cannot establish context")));
		info.GetReturnValue().Set(Undefined(isolate));
		return;
	case PCSC::ERROR_PNP:
		isolate->ThrowException(Exception::TypeError(String::NewFromUtf8(isolate, "PnP is not supported")));
		info.GetReturnValue().Set(Undefined(isolate));
		return;
	}

	// Update readers
	int res = PCSC::update_readers(self->_scard_context,
		self->_readers_state,
		isolate,
		self->_readers);

	// TODO: se séparer des codes d'erreur : utiliser pcsc_stringify_error
	// Interprete the updating result
	switch (res) {
	case PCSC::ERROR_INVALID_CXT:
		isolate->ThrowException(
			Exception::TypeError(String::NewFromUtf8(isolate, "Cannot establish context"))
		);
		info.GetReturnValue().Set(Undefined(isolate));
		return;
	};

	// Invoked as constructor: `new PCSC(...)`
	self->Wrap(info.This());
	info.GetReturnValue().Set(info.This());
}

/**
 * Check scardPoll events, and eventually emit scardPoll event
 * @param args {v8::Argument}
 * @return {v8::Undefined}
 */
void PCSCEmitter::scardRead(const v8::FunctionCallbackInfo<v8::Value>& info) {
	Isolate* isolate = info.GetIsolate();
	HandleScope scope(isolate);

  // Callback to reenter in the scardRead loop
  if(info[0]->ToObject()->IsFunction()){
    Local<Function> callback = Local<Function>::Cast(info[0]);
    //Read status (blocking operation)
    PCSCEmitter* self = ObjectWrap::Unwrap<PCSCEmitter>(info.This());
    PCSC::check_card_status( self->_scard_context,
                 self->_readers_state,
                 isolate,
				 self->_readers,
                 callback );
  } else {
    isolate->ThrowException(
      Exception::TypeError(String::NewFromUtf8(isolate, "`scardRead` require a callback parameter"))
    );
  }
  info.GetReturnValue().Set(Undefined(isolate));
}

/**
 * Get the list of available SmartCard/RFID readers
 *
 * @param args {v8::Argument}
 * @return {v8::Array} list of available readers
 */
void PCSCEmitter::getReaders(const v8::FunctionCallbackInfo<v8::Value>& info) {
	Isolate* isolate = info.GetIsolate();
	HandleScope scope(isolate);

  // Unwrap PCSC context
  PCSCEmitter* self = ObjectWrap::Unwrap<PCSCEmitter>(info.This());

  // Close scope returning readers
  info.GetReturnValue().Set(self->_readers);
}
