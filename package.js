Package.describe({
  summary: 'Synchronized streams for Meteor',
  version: '0.1.0',
  name: 'jagi:streams',
  git: 'https://github.com/jagi/meteor-streams.git'
});

Package.on_use(function (api) {
  api.versionsFrom('METEOR@1.0');

  api.addFiles('lib/streams.js', 'server');
  api.addFiles('lib/pipe.js', 'server');
  api.addFiles('lib/buffer_stream.js', 'server');

  api.export(['Streams', 'BufferStream'], 'server');
});
