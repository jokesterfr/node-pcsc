/******************************************************************************
 *                                                                            *
 * @file pcsc-client.cc                                                       *
 * @author Clément Désiles <clement.desiles@telecomsante.com>                 *
 * @date 2013/02/14                                                           *
 * @licence MIT                                                               *
 *                                                                            *
 *****************************************************************************/

#include "pcsc-client.h"
#include <iostream>

// Under Windows it is not defined
#ifndef MAX_ATR_SIZE
#define MAX_ATR_SIZE 33
#endif

namespace PCSC {

  /**
   * Get the PCSC context
   * it's kind of initialization process
   */
  int init_context( SCARDCONTEXT &hContext ) {
    LONG rv;

    // Establish context
    rv = SCardEstablishContext(SCARD_SCOPE_SYSTEM, NULL, NULL, &hContext);
    if (rv != SCARD_S_SUCCESS) {
        return ERROR_ESTABLISH_CXT;
    }

    // The Mac OS API is from PCSClite 1.4.x
    // PnP API was introduced in 1.6.x
    // So I will try not to use the API
    // Unfortunatly the API pre 1.6.x is nonblocking.
    // Which is different from the original windows API
    //
    // Check if Plug 'n play is supported
    #ifndef __APPLE__
    SCARD_READERSTATE readerState[1];
    readerState[0].szReader = "\\\\?PnP?\\Notification";
    readerState[0].dwCurrentState = SCARD_STATE_UNAWARE;
    rv = SCardGetStatusChange(hContext, 0, readerState, 1);
    if (readerState[0].dwEventState & SCARD_STATE_UNKNOWN) {
      return ERROR_PNP;
    }
    #endif

    return CONTEXT_SET;
  }


  /**
   * Update the readers list and the associated readersState list
   * which loops over new readers states.
   */
  int update_readers( SCARDCONTEXT &hContext, SCARD_READERSTATE *&readersState, v8::Persistent<v8::Object> &readers ){
    LONG rv;
    DWORD dwReaders;
    #ifdef SCARD_AUTOALLOCATE
      dwReaders = SCARD_AUTOALLOCATE;
    #endif

    LPSTR mszReaders;
    LPTSTR ptr = NULL;
    int nbReaders = 0;
    int i = 0;

    // Check context
    rv = SCardIsValidContext(hContext);
    if (rv != SCARD_S_SUCCESS) {  
      return ERROR_INVALID_CXT;
    }

    #ifndef SCARD_AUTOALLOCATE
      // Allocate buffer when autoallocate is not present
      rv = SCardListReaders(hContext, NULL, NULL, &dwReaders);
      mszReaders = static_cast<LPSTR>(new char[dwReaders]);
    #endif
    // Call with the real allocated buffer
    rv = SCardListReaders(hContext, NULL, mszReaders, &dwReaders);
    if(rv != SCARD_S_SUCCESS || mszReaders[0] == '\0') {
      readers = v8::Persistent<v8::Array>::New(v8::Array::New(0));
      #ifdef SCARD_AUTOALLOCATE
      SCardFreeMemory(hContext, mszReaders);
      #else
      delete mszReaders;
      #endif
      return NO_READER_FOUND;
    }

    // Get number of readers from null separated string
    ptr = mszReaders;
    while(*ptr != '\0') {
      ptr += strlen(ptr)+1;
      nbReaders++;
    }

    // Allocate the ReaderStates table
    if(readersState) {
      free(readersState);
    }
    readersState = new SCARD_READERSTATE[nbReaders+1]; // +1 For the PnP Record
    
    // Create a new readers Array
    //readers = v8::Persistent<v8::Array>::New(v8::Array::New(nbReaders));
    readers = v8::Persistent<v8::Object>::New(v8::Object::New());

    // Read the readers structure
    ptr = mszReaders;
    for(i=0; i<nbReaders; i++) {
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
    #ifndef __APPLE__
    readersState[nbReaders].szReader = "\\\\?PnP?\\Notification";
    readersState[nbReaders].dwCurrentState = SCARD_STATE_UNAWARE;
    #endif

    #ifdef SCARD_AUTOALLOCATE
    // This is a Memory Leak, but mszReaders is needed until the end
    //SCardFreeMemory(hContext, mszReaders);
    #endif
    return READERS_UPDATED;
  }


  /** 
   * On status change, call the appropriate 
   * registered functions (if there are).
   */
  int check_card_status( SCARDCONTEXT &hContext, SCARD_READERSTATE *&readersState, v8::Persistent<v8::Object> &readers, v8::Local<v8::Function> &callback ){
    unsigned int i, k, nbReaders;
    DWORD evt;
    LONG rv;
    v8::Local<v8::String> status;
    char atr[MAX_ATR_SIZE*3+1];
    char uid[30];

    // Check context
    rv = SCardIsValidContext(hContext);
    if (rv != SCARD_S_SUCCESS) {
      // Debug purpose ONLY
      std::cout << "ERROR_INVALID_CXT" << std::endl;
      return ERROR_INVALID_CXT;
    }

    // Count readers
    nbReaders = readers->GetPropertyNames()->Length();

    // Readers state has to be filled up by update_readers
    if ( !readersState || !nbReaders ) {
      std::cout << "NO_READER_FOUND" << std::endl;
      return NO_READER_FOUND;
    }

    // Check status
    rv = SCardGetStatusChange(hContext, INFINITE, readersState, nbReaders);
    if ((rv == SCARD_S_SUCCESS) || (static_cast<unsigned int>(rv) == SCARD_E_TIMEOUT)) {

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
        if(evt & SCARD_STATE_IGNORE) {
          status = v8::String::New("SCARD_STATE_IGNORE");
        } else if(evt & SCARD_STATE_UNKNOWN) {
          status = v8::String::New("SCARD_STATE_UNKNOWN");
        } else  if(evt & SCARD_STATE_UNAVAILABLE) {
          status = v8::String::New("SCARD_STATE_UNAVAILABLE");
        } else if(evt & SCARD_STATE_EMPTY) {
          status = v8::String::New("SCARD_STATE_EMPTY");
        } else if(evt & SCARD_STATE_PRESENT) {
          status = v8::String::New("SCARD_STATE_PRESENT");
        } else if(evt & SCARD_STATE_ATRMATCH) {
          status = v8::String::New("SCARD_STATE_ATRMATCH");
        } else if(evt & SCARD_STATE_EXCLUSIVE) {
          status = v8::String::New("SCARD_STATE_EXCLUSIVE");
        } else if(evt & SCARD_STATE_INUSE) {
          status = v8::String::New("SCARD_STATE_INUSE");
        } else if(evt & SCARD_STATE_MUTE) {
          status = v8::String::New("SCARD_STATE_MUTE");
        }

        // Prepare readerObject event
        // ---------------------------
        v8::Local<v8::Object> readerObj = v8::Object::New();
        readerObj->Set(v8::String::NewSymbol("name"), readers->GetOwnPropertyNames()->Get(i));
        readerObj->Set(v8::String::NewSymbol("status"), v8::Local<v8::Value>::New(status));

        // Card object, will be eventually filled lateron
        v8::Local<v8::Object> cardObj = v8::Object::New();

        // If a card is present prepare card event
        // ----------------------------------------
        if(evt & SCARD_STATE_PRESENT) {
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
            cardObj->Set(v8::String::NewSymbol("ATR"), v8::String::New(atr));
          }
          
          // Establishes a connection to a smart card contained by a specific reader.
          SCARDHANDLE hCard;
          DWORD activeProtocol;
          v8::String::Utf8Value readerName(readers->GetOwnPropertyNames()->Get(i));
          rv = SCardConnect(
            hContext,                               // Resource manager handle
            (LPCSTR)*readerName,                    // Reader name
            SCARD_SHARE_SHARED,                     // Share Mode
            SCARD_PROTOCOL_T0  | SCARD_PROTOCOL_T1, // Preferred protocols (T=0 or T=1)
            &hCard,                                 // Returns the card handle
            &activeProtocol                         // Active protocol
          );

          // Connect to the card reader
          // ----------------------------------------
          if (rv == SCARD_S_SUCCESS) {
            // APDU exchange
            LPCSCARD_IO_REQUEST ioRequest;
            switch (activeProtocol) {
              case SCARD_PROTOCOL_T0:
                cardObj->Set(v8::String::NewSymbol("Protocol"), v8::String::New("T=0"));
                ioRequest = SCARD_PCI_T0;
                break;

              case SCARD_PROTOCOL_T1:
                cardObj->Set(v8::String::NewSymbol("Protocol"), v8::String::New("T=1"));
                ioRequest = SCARD_PCI_T1;
                break;

              default:
                ioRequest = SCARD_PCI_RAW;
                break;
            }

            // Pseudo ADPU to Retrieve card Serial Number (UID)
            BYTE pbRecvBuffer[10];//[10*1024]; // Max Card Size currently (2013) was: [256];
            BYTE pbSendBuffer[] = { 0xFF, 0xCA, 0x00, 0x00, 0x00 };

            SCARD_IO_REQUEST pioRecvPci;
            DWORD dwSendLength = sizeof(pbSendBuffer);
            DWORD dwRecvLength = sizeof(pbRecvBuffer);

            rv = SCardTransmit(
              hCard,      // Card handle
              ioRequest,    // Pointer to the sent protocol header
              pbSendBuffer, // Send buffer
              dwSendLength, // Send buffer length
              &pioRecvPci,  // Pointer to the rec. protocol header
              pbRecvBuffer, // Receive buffer
              &dwRecvLength // Receive buffer length
            );

            if (rv == SCARD_S_SUCCESS) {
              // Save UID
              if (dwRecvLength) {
                for (k = 0; k < dwRecvLength; k++) {
                  sprintf(&uid[k*3], "%02X ", pbRecvBuffer[k]);
                }
                uid[k*3-1] = '\0';
                cardObj->Set(v8::String::NewSymbol("UID_length"), v8::Number::New(dwRecvLength));
              } else {
                uid[0] = '\0';
              }         
              cardObj->Set(v8::String::NewSymbol("UID"), v8::String::New(uid));

              // Disconnect it right now
              SCardDisconnect(
                hCard,          // Card handle.
                SCARD_UNPOWER_CARD
              );
            } else {
              switch(rv) {
                case SCARD_E_INSUFFICIENT_BUFFER:
                  cardObj->Set(v8::String::NewSymbol("err"), v8::String::New("SCARD_E_INSUFFICIENT_BUFFER"));
                  break;
                case SCARD_E_INVALID_PARAMETER:
                  cardObj->Set(v8::String::NewSymbol("err"), v8::String::New("SCARD_E_INVALID_PARAMETER"));
                  break;
                case SCARD_E_INVALID_HANDLE:
                  cardObj->Set(v8::String::NewSymbol("err"), v8::String::New("SCARD_E_INVALID_HANDLE"));
                  break;
                case SCARD_E_INVALID_VALUE:
                  cardObj->Set(v8::String::NewSymbol("err"), v8::String::New("SCARD_E_INVALID_VALUE"));
                  break;
                case SCARD_E_NO_SERVICE:
                  cardObj->Set(v8::String::NewSymbol("err"), v8::String::New("SCARD_E_NO_SERVICE"));
                  break;
                case SCARD_E_NOT_TRANSACTED:
                  cardObj->Set(v8::String::NewSymbol("err"), v8::String::New("SCARD_E_NOT_TRANSACTED"));
                  break;
                case SCARD_E_PROTO_MISMATCH:
                  cardObj->Set(v8::String::NewSymbol("err"), v8::String::New("SCARD_E_PROTO_MISMATCH"));
                  break;
                case SCARD_E_READER_UNAVAILABLE:
                  cardObj->Set(v8::String::NewSymbol("err"), v8::String::New("SCARD_E_READER_UNAVAILABLE"));
                  break;
                case SCARD_F_COMM_ERROR:
                  cardObj->Set(v8::String::NewSymbol("err"), v8::String::New("SCARD_F_COMM_ERROR"));
                  break;
                case SCARD_W_RESET_CARD:
                  cardObj->Set(v8::String::NewSymbol("err"), v8::String::New("SCARD_W_RESET_CARD"));
                  break;
                case SCARD_W_REMOVED_CARD:
                  cardObj->Set(v8::String::NewSymbol("err"), v8::String::New("SCARD_W_REMOVED_CARD"));
                  break;
              } 
            }
          }
        }

        //
        // Emit an event message
        // ----------------------
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
    v8::Local<v8::Value> *argv = NULL;
    callback->Call(v8::Context::GetCurrent()->Global(), argc, argv);      
    return STATUS_CHECKED;
  }

  /**
   * Release the PCSC context
   */
  int release_context(SCARDCONTEXT &hContext) {
     return SCardReleaseContext(hContext);
  }
} // <- end of namespace
