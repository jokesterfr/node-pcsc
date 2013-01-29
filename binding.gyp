{
	'targets': [
		{
			'target_name': 'pcsc',
			'sources': [ 'src/node-pcsc.cc' ],
			'include_dirs+': [
				'/usr/include/PCSC'
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