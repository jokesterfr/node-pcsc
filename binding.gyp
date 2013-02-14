{
	'targets': [
		{
			'target_name': 'node_pcsc',
			'sources': [ 
				'src/node-pcsc.cc',
				'src/pcsc-emitter.h',
				'src/pcsc-emitter.cc',
				'src/pcsc-client.h',
				'src/pcsc-client.cc'
			],
			'include_dirs': [
				'/usr/include/PCSC'
			],
			'cflags': [
				'-Wall',
				'-Wextra',
				'-Wno-unused-parameter',
				'-fPIC',
				'-fno-strict-aliasing',
				'-fno-exceptions',
				'-pedantic'],
			'link_settings': {
				'libraries': [
					'-lpthread',
					'-lpcsclite'
				]
			}
		}
	]
}