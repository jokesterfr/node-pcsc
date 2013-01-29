#!/usr/bin/env node

/******************************************************************************
 *                                                                            *
 * @file node-pcsc.js                                                         *
 * @author Clément Désiles <clement.desiles@telecomsante.com>                 *
 * @date 2013/01/28                                                           *
 *                                                                            *
 * Sample to test the nodejs binding to pcsc                                  *
 *                                                                            *
 *****************************************************************************/

var assert = require('assert'),
    pcsc = require('./build/Release/pcsc');

// Init must return 0 for success
assert.equal(0, pcsc.init());

console.log(pcsc.getReaders());