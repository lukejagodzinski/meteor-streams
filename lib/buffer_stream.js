var util = Npm.require('util');
var PassThrough = Npm.require('stream').PassThrough;

BufferStream = function() {
  PassThrough.call(this);

  this.buffer = new Buffer(0);
};

util.inherits(BufferStream, PassThrough);

BufferStream.prototype._transform = function (data, encoding, done) {
  this.buffer = Buffer.concat([this.buffer, data]);
  done();
};

BufferStream.prototype._flush = function (done) {
  done();
};
