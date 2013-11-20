#!/usr/bin/env node

/******************************************************************************
 *                                                                            *
 * @file test.js                                                              *
 * @author Clément Désiles <clement.desiles@telecomsante.com>                 *
 * @date 2013/02/13                                                           *
 * @licence MIT                                                               *
 *                                                                            *
 * Sample to test the nodejs bindings to PCSC                                 *
 *                                                                            *
 *****************************************************************************/

var fork = require('child_process').fork;
var pcsc = fork('./lib/node-pcsc.js');

pcsc.on('message', function(evt) {
	// Show info when state switch to present
	if(evt.reader.status == 'SCARD_STATE_PRESENT'){
		console.log(evt.reader.name);
		if (evt.reader.type) console.log('-> type:', evt.reader.type);
		if (evt.card.name) console.log('-> card:', evt.card.name);
		if (evt.card.ATR) console.log('-> card ATR:', evt.card.ATR);
		if (evt.card.Protocol) console.log('-> card Protocol:', evt.card.Protocol);
		if (evt.card.err) console.log('-> card transmit err:', evt.card.err);
		if (evt.card.UID) console.log('-> card UID:', evt.card.UID);
		console.log();
	}
});

i = 10;
while(1) {
  i = i/3;
}
