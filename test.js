const assert = require('assert');

describe('Can make a deferred object', function() {

  it('behaves like a promise', function(done) {

    const defer = require('./index');

    const promise = defer();
    promise.then(result => {

      assert.equal(result, 'foo');
      done();
    });

    promise.resolve('foo');
  });
});