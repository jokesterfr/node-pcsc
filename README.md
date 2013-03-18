node-pcsc
=========

A PCSC binding for NodeJS

## Build

Dependencies to run this out are:

* nodejs
* libpcsclite
* libpcsclite-dev

If you are running a Debian/Ubuntu Linux distribution you may install it this way:

	sudo apt-get install nodejs libpcsclite libpcsclite-dev

To compile the native sources you may call `node-gyp`:

	node-gyp configure
	node-gyp build

Or install it via the `npm` tool:

	npm install

## Updating SmartCard/RFID tags card list

The author of PCSC, Ludovic Rousseau, is maintaining a list of known SmartCard/RFID tags on his website. This package integrate a version of it (`./lib/pcsc-list.js`), and provide a tool to update it if needed:

	npm run update-list

Or (strictly equivalent)

	./tools/updateList.js


## API

The JS-side API is still not stable, please refer to examples provided for now. 

## Testing

A test suite will be proabably written later on.

## Code sample

A little example using this library is available, you can try it this way:

	./example.js

## Contributing

This package would have never existed without great support of open source projects, rewarding the community by this work is the least I can do.
I would appreciate any *code review*, *comments*, *issue reportings*, *forks* from you. Please feel free to contact me at: `clement.desiles{{EMAIL_SYMBOL}}telecomsante.com`

## Legal

This projet is under the MIT licence. Please refer to the `LICENCE` file provided for more information.
