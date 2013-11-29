#!/usr/bin/env node

/*
 * @file updateList.js
 * @author Clément Désiles <clement.desiles@telecomsante.com>
 * @date 2013/02/17
 * @description
 * Update the list of known SmartCard from Ludovic Rousseau's website
 */
'use strict';

var fs = require('fs')
  , url = require('url')
  , http = require('http')
  , BufferStream = require('bufferstream')

// List file configuration
var outputFile = __dirname + '/../lib/smcard-list.js';

/** 
 * A parser written specificaly to translate the 
 * smartcard list from Ludovic Rousseau (Debian maintainer)
 * into a brand new Javascript class file ;-)
 */
var SmartCardFileParser = function(){
	// Attributes
	this.firstblock = true;
	this.firstcomment = true;
	this.openinfo = false;
	this.infobuff = '';

	// Writeable stream
	this.output = fs.createWriteStream(outputFile, ['utf8']);

	/**
	 * Append a parsed line to the output
	 * @param line {String} line to parse
	 * @return none
	 */
	this.parseLine = function( line ){
		// Escape some caracters
		line = line.replace(/\\/g, '\\\\');
		line = line.replace(/\'/g, '\\\'');

		// Save the comments ( licence... )
		if( line.trim()[0] == '#' && this.firstblock ){
			line = line.replace(/#/, '');
			if (this.firstcomment){
				this.output.write( '/* '+line.trim()+'\n' );
				this.firstcomment = false;
			} else {
				this.output.write( ' * '+line.trim()+'\n' );
			}
		} else if (line.trim() != '' && line.trim()[0] != '#'){
			// First block exception
			if ( this.firstblock && line[0] != '\t' ){
				this.output.write(' *\n */\n\nvar list = exports.list = {');
				this.output.write( '\n\t\'' + line + '\' : {');
				this.firstblock = false;
			// Other block
			} else if( line[0] != '\t' ){
				// Append the `info` buffer
				if ( this.openinfo && this.infobuff != '' ){
					this.output.write( ',\n\t\tinfo:\'' + this.infobuff.trim() + '\'' );
					this.infobuff = '';
				}
				this.openinfo = false;
				this.output.write( '\n\t},\n\t\'' + line.trim() + '\':{');
			// Name property associated with ATR
			} else if(!this.openinfo) {
				this.output.write( '\n\t\tname:\'' + line.trim() + '\'' );
				this.openinfo = true;
			// Comment has been started
			} else if(this.infobuff) {
				this.infobuff+= '\t\\\n\t\t' + line;
			// Start collecting `info`
			} else {
				this.infobuff+=line;
			}
		}
	}

	/**
	 * Set the last bytes and close
	 * @return none
	 */
	this.closeFile = function(){
		this.output.end('\n\t}\n};');
	}
}

// Smartcard source list from Ludovic Rousseau
var listURL = 'http://ludovic.rousseau.free.fr/softwares/pcsc-tools/smartcard_list.txt';
var options = {
    host: url.parse(listURL).host,
    port: 80,
    path: url.parse(listURL).pathname
};

// Get the remote file, then parse it
console.log("Waiting for smartcard_list.txt...");
http.get( options, function(res) {
	switch( res.statusCode ){
		case 200:
			// Parser
			var parser = new SmartCardFileParser();

			// A stream line cutter
			var lineCutter = new BufferStream({size:'flexible'});
			lineCutter.split('\n', function (line) {
				// Convert buffer to string
				parser.parseLine(line.toString('utf8'));
			});

			// Pipe http response to lineCutter
			console.log("Parsing file...");
			res.pipe(lineCutter);

			res.on('end', function(){
				console.log("Done!\nList has been saved in",outputFile);
				parser.closeFile();
			});
			break;

		default:
			console.error("Impossible to retrieve the list from", listURL);
			console.error("HTTP Error:", res.statusCode);
			console.error("List has not been updated.");
	}    
});