var Future = Npm.require('fibers/future');

Streams.pipe = function () {
  var streams;

  if (arguments.length === 1 && _.isArray(arguments[0])) {
    streams = arguments[0];
  } else if (arguments.length >= 2) {
    streams = arguments;
  } else {
    throw Error('Provide two or more streams');
  }

  var future = new Future();

  for (var i = 0; i < streams.length; i++) {
    var stream = streams[i];

    stream.on('error', function (err) {
      future.throw(err);
    });
  }

  var lastStream = streams[streams.length - 1];
  lastStream.on('finish', function () {
    future.return();
  });

  for (var i = 0; i < streams.length - 1; i++) {
    var currStream = streams[i];
    var nextStream = streams[i + 1];

    currStream.pipe(nextStream);
  }

  return future.wait();
};
