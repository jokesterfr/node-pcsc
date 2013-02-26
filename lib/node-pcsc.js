/******************************************************************************
 *                                                                            *
 * @file node-pcsc.js                                                         *
 * @author Clément Désiles <clement.desiles@telecomsante.com>                 *
 * @date 2013/01/28                                                           *
 * @licence MIT                                                               *
 *                                                                            *
 * Javascript-side of node-pcsc.js module                                     *
 * This module has to be forked, because node_pcsc.node has a                 *
 * blocking `scardRead` method.                                               *
 * @see the provided example.js                                               *
 *                                                                            *
 * Take care following the compiling instructions before using it             *
 * (@see README.md), otherwise /build/Release/node-pcsc.node would            *
 * not exist yet.                                                             *
 *                                                                            *
 *****************************************************************************/

var PCSC = require(__dirname + '/../build/Release/node_pcsc.node').PCSC;
var smlist = require('./pcsc-list.js').list;

var pcsc =  new PCSC();

/**
 * Add some extra features arround the C++ readCard
 * method... such as ATR <-> card type recognition etc...
 * @recursive
 * @return none
 */
function readCard() {
	pcsc.scardRead( function(evt) {
		if ( evt ) {
			// Compute some more informations over it
			evt.reader.type = getType(evt.reader.name);

			if ( evt.card && evt.card.ATR ) {
				var item = getItem(evt.card.ATR);
				if (item && item.name) evt.card.name = item.name;
				// if (item && item.info) evt.card.info = item.info;
			}

			// IPC communication emit message
			process.send(evt);
		}
	});

	// C++ side is blocking, recursion here does not harm
	return readCard();
};
readCard();


/**
 * Get type of some know readers
 * @param hwid {String} the hardware ID from PCSC
 * @return {String} reader type
 */
function getType(hwid) {
	switch (hwid) {
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
function getItem(ATR) {
	var item;
	while( item === undefined ) {
		item = smlist[ATR];
		if(!ATR) break;
		ATR = ATR.substring(0, ATR.length-1);
	}
	return item;
}