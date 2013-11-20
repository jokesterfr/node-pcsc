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
      'cflags': [
        '-Wall',
        '-Wextra',
        '-Wno-unused-parameter',
        '-fPIC',
        '-fno-strict-aliasing',
        '-fno-exceptions',
        '-pedantic'
      ],
      'conditions': [
        ['OS=="linux"', {
          'include_dirs': [
            '/usr/include/PCSC'
          ],
          'link_settings': {
            'libraries': [
              '-lpthread',
              '-lpcsclite'
            ]
          }
        }],
        ['OS=="mac"', {
          'libraries': ['-framework', 'PCSC']
        }],
        ['OS=="win"', {
          'libraries': ['-lWinSCard']
        }]
      ]
    }
  ]
}
