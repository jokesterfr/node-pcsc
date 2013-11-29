#!/usr/bin/env node

/*
 * @file example2.js
 * @date 2013-11-29
 * @licence MIT
 * @description
 * A simple example of how to bind node-pcsc
 * from an external program
 */
'use strict';

var pcsc = require(__dirname + '/../binding');

pcsc.init();
pcsc.on('evt', function(evt) {
	console.log('Event status:',evt.reader.status);
});

// Release context after 5s
setTimeout( pcsc.release, 5000);
