/******************************************************************************
 *                                                                            *
 * @file node-pcsc.js                                                         *
 * @author Clément Désiles <clement.desiles@telecomsante.com>                 *
 * @date 2013/01/28                                                           *
 * @licence MIT                                                               *
 *                                                                            *
 * Javascript-side of node-pcsc.js module                                     *
 *                                                                            *
 * Take care following the compiling instructions before using it             *
 * (@see README.md), otherwise /build/Release/node-pcsc.node would            *
 * not exist yet.                                                             *
 *                                                                            *
 *****************************************************************************/

var PCSC = require(__dirname + '/../build/Release/node_pcsc.node').PCSC;
var smlist = require('./pcsc-list.js').list;
var events = require('events');

// Avoid any libuv native calls =)
inherits(PCSC, events.EventEmitter);

/**
 * Add some features to the native PCSC function
 * to start polling on init() call, and provide a handle
 * to stop it when necessary.
 */
var init = exports.init = function(){
	var pcsc =  new PCSC();

	// Wait for scard_read callback
	function scard_read_call(){
		pcsc.scard_read_call_tmt = setTimeout(function(){
			return pcsc.scardRead(function(evt){
				if ( evt ) {
					// Compute some more informations over it
					evt.reader.type = getType(evt.reader.name);

					if ( evt.card && evt.card.ATR ){
						var item = getItem(evt.card.ATR);
						if (item && item.name) evt.card.name = item.name;
						// if (item && item.info) evt.card.info = item.info;
					}
					pcsc.emit('readerStateChange', evt);
				}
				// Loop again
				scard_read_call();
			});
		}, 0); // <- Don't worry, C++ side 'll wait the next event
	}
	scard_read_call();

	// Stop watching events
	pcsc.stop = function(){
		if(pcsc.scard_read_call_tmt) { 
			clearTimeout(pcsc.scard_read_call_tmt);
		}
	}
	return pcsc;
};

/** 
 * Extend target prototype
 * @param targer {Class} target inheriter
 * @param source {Class} prototype source
 * @return none
 */ 
function inherits(target, source) {
	for (var k in source.prototype) {
		target.prototype[k] = source.prototype[k];
	}
}

/**
 * Get type of some know readers
 * @param hwid {String} the hardware ID from PCSC
 * @return {String} reader type
 */
function getType(hwid){
	switch (hwid){
		case 'OMNIKEY AG CardMan 3021 00 00':
		case 'OMNIKEY CardMan 5x21 00 00':
			return 'scard';
		case 'OMNIKEY CardMan 5x21 00 01':
			return 'rfid';
	}
}

/**
 * Retrieve some more infos about the inserted card
 * @param ATR {String} atr of the inserted card
 * @return {Object} if defined, the card name and info details
 */
function getItem(ATR){
	var item;
	while( item === undefined ){
		item = smlist[ATR];
		if(!ATR) break;
		ATR = ATR.substring(0, ATR.length-1);
	}
	return item;
}