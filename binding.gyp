{
	'targets': [
		{
			'target_name': 'pcsc',
			'sources': [ 'src/node-pcsc.cc' ],
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