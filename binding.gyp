{
	'targets': [
		{
			'target_name': 'pcsc',
			'sources': [ 'src/node-pcsc.cc' ],
			'dependencies':[
				'deps/libuv/uv.gyp:libuv'
			],
			'include_dirs+': [
				'/usr/include/PCSC',
				'deps/libuv/include'
			],
			'cflags': [
				'-Wall',
				'-Wextra',
				'-Wno-unused-parameter',
				'-fPIC',
				'-fno-strict-aliasing',
				'-fno-exceptions',
				'-pedantic'
			],
			'link_settings': {
				'libraries': [
					'-lpthread',
					'-lpcsclite'
				]
			}
		}
	]
}