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
#ifdef __APPLE__
#include <PCSC/winscard.h>
#include <PCSC/wintypes.h>
#else
#include <winscard.h>
#endif

#include "pcsc-client.h"

class PCSCEmitter : public node::ObjectWrap {
  public:
    static void Init( v8::Handle<v8::Object> target );

  private:
    PCSCEmitter();
    ~PCSCEmitter();

    SCARDCONTEXT _scard_context;
    SCARD_READERSTATE *_readers_state;
    v8::Persistent<v8::Object> _readers;

    static v8::Handle<v8::Value> New( const v8::Arguments& args );
    static v8::Handle<v8::Value> scardRead( const v8::Arguments& args );
    static v8::Handle<v8::Value> getReaders( const v8::Arguments& args );
};

#endif
