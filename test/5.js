var test = require('tape')
    , streamify = require('..')
    , concat = require('concat-stream')
;

test('async, non-blocking', function(t) {
    var s = streamify(['1', '2', '3']);

    var i = 0;
    s.on('data', function(item) {
      i++;
    });

    process.nextTick(function() {
      t.ok(i === 0 || i === 1, 'should have emitted one item at most in the first tick');
      process.nextTick(function() {
        t.ok(i === 1 || i === 2, 'should have emitted one or two items in the second tick');
        process.nextTick(function() {
          t.ok(i === 2 || i === 3, 'should have emitted two or three items in the thrid tick');
          process.nextTick(function() {
            t.equal(3, i, 'should have emitted all three items in the fourth tick');
            t.end();
          });
        });
      });
    });
});
