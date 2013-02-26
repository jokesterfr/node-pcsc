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
		if (evt.card.UID) console.log('-> card UID:', evt.card.UID);
		console.log();
	}
});



// Do some other stuff
var count = 10;
console.log('You have', count, 'seconds to use the reader');
console.log(count);
var interval = setInterval(function(){
	if(count) count--;
	console.log(count);
}, 1000);


// Kill the sub process after 15s
setTimeout(function(){
	clearTimeout(interval);
	console.log('Kill the sub process');
	pcsc.kill( 'SIGTERM' );
}, count * 1000);