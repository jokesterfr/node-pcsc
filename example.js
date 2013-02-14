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

// Init the PCSC callback chaining
var pcsc = require('./lib/node-pcsc').init();

// Get the readers
var readers = pcsc.getReaders();
console.log('# SmartCard/RFID available readers:');
console.log('===================================');
console.log(readers);
console.log();

// Register handler on `readerStateChange` events
pcsc.on('readerStateChange', function(evt) {
	// Show info when state switch to present
	if(evt.reader.status == 'SCARD_STATE_PRESENT'){
		console.log(evt.reader.name);
		if (evt.reader.type) console.log('-> type:', evt.reader.type);
		if (evt.card.name) console.log('-> card:', evt.card.name);
		console.log();
	}
});

// Exit pcsc loop
process.on('exit', function() {
	if(pcsc) pcsc.stop();
});