/******************************************************************************
 *                                                                            *
 * @file pcsc-emitter.h                                                       *
 * @author Clément Désiles <clement.desiles@telecomsante.com>                 *
 * @date 2013/02/14                                                           *
 * @licence MIT                                                               *
 *                                                                            *
 *****************************************************************************/

#ifndef NODE_PCSC_EMITTER_H
#define NODE_PCSC_EMITTER_H

#include <node.h>
#include <node_object_wrap.h>
#ifdef __APPLE__
#include <PCSC/winscard.h>
#include <PCSC/wintypes.h>
#else
#include <winscard.h>
#endif

#include "pcsc-client.h"

class PCSCEmitter : public node::ObjectWrap {
  public:
    static void Init(v8::Local<v8::Object> exports);

  private:
    explicit PCSCEmitter();
    ~PCSCEmitter();

    SCARDCONTEXT _scard_context;
    SCARD_READERSTATE *_readers_state;
    v8::Persistent<v8::Object> _readers;

    static void New(const v8::FunctionCallbackInfo<v8::Value>& info);
    static void scardRead(const v8::FunctionCallbackInfo<v8::Value>& info);
    static void getReaders(const v8::FunctionCallbackInfo<v8::Value>& info);

	static v8::Persistent<v8::Function> constructor;
};

#endif
