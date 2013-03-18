/******************************************************************************
 *                                                                            *
 * @file pcsc-client.h                                                        *
 * @author Clément Désiles <clement.desiles@telecomsante.com>                 *
 * @date 2013/02/14                                                           *
 * @licence MIT                                                               *
 *                                                                            *
 *****************************************************************************/

#ifndef NODE_PCSC_CLIENT_H
#define NODE_PCSC_CLIENT_H

#include <stdlib.h>
#include <stdio.h>
#include <string.h> 
#include <v8.h>
#include <node.h>

#include <winscard.h>

namespace PCSC {

	// Some status return for our PCSC client handlers
	enum STATUS {
		CONTEXT_SET,			// Context has been set successfully
		EVENT_FOUND,			// A new event has to be fired
		NO_EVENT_FOUND,			// No event to fire
		NO_READER_FOUND,		// No reader has been found
		RSTATES_UPDATED,		// Readers's state updated
		READERS_UPDATED,		// The reader list has been updated
		STATUS_CHECKED,         // Card status has been checked
		ERROR_ESTABLISH_CXT,	// Cannot establish context
		ERROR_INVALID_CXT,		// Cannot establish context
		ERROR_PNP				// Unsupported UPnP
	};

	// PCSC functions
	int init_context( SCARDCONTEXT &hContext );
	int update_readers( SCARDCONTEXT &hContext, SCARD_READERSTATE *&readersState, v8::Persistent<v8::Object> &readers );
	int check_card_status( SCARDCONTEXT &hContext, SCARD_READERSTATE *&readersState, v8::Persistent<v8::Object> &readers, v8::Local<v8::Function> &callback );
	int release_context ( SCARDCONTEXT &hContext );
}

#endif
