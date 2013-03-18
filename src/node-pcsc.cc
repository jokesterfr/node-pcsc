/******************************************************************************
 *                                                                            *
 * @file node-pcsc.cc                                                         *
 * @author Clément Désiles <clement.desiles@telecomsante.com>                 *
 * @date 2013/02/14                                                           *
 * @licence MIT                                                               *
 *                                                                            *
 * Nodejs native code binding to support the PCSC API                         *
 * PCSC handle communication with RFID readers                                *
 *                                                                            *
 * This code has been written thanks to this documentation:                   *
 * @see http://nodejs.org/api/addons.html                                     *
 *                                                                            *
 *****************************************************************************/

#include <node.h>
#include "pcsc-emitter.h"

using namespace v8;

void init(Handle<Object> target) {
	PCSCEmitter::Init(target);

	// Gracefully free PCSC memory
	// AtExit(&PCSC::close);
}

NODE_MODULE(node_pcsc, init)
