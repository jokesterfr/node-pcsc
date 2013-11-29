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

// Script requirements
// -------------------
var util = require('util');
var events = require('events');
var fork = require('child_process').fork;
var node_pcsc = __dirname + '/lib/node-pcsc.js';

var Bindings = function() {
	// Call super constructor		
	events.EventEmitter.call( this );

	// PCSC sub-process reference
	this.pcsc = null;
};

util.inherits(Bindings, events.EventEmitter);


/**
 * Init the pcsc sub-process
 * @return {Boolean} operation status
 */
Bindings.prototype.init = function() {
	// Protection against multiple init
	if (this.pcsc) return false;

	// Fork the sub-process
	this.pcsc = fork(node_pcsc);

	// Message appropriation
	var self = this;
	this.pcsc.on('message', function(message) {
		switch (message.name) {
			case 'readerStateChange':
				self.emit('evt', message);	
				break;
		};
	});

	// Ack
	return true;
};

/**
 * Kill the pcsc sub-process
 * @return {Boolean} operation status
 */
Bindings.prototype.release = function() {
	if (this.pcsc) {
		this.pcsc.kill('SIGTERM');
	}
	this.pcsc = null;
	return true;
};

// Export an instance
module.exports = new Bindings();
