#!/usr/bin/env node
//
// How to bind node-pcsc from an external program
//

var pcsc = require('./lib/node-pcsc.js');
pcsc.init();

pcsc.on('evt', function(evt) {
	console.log('Event status:',evt.reader.status);
});

// Release context after 5s
setTimeout( pcsc.release, 5000);
