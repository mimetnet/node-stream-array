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
      t.equal(0, i, 'should emit the first item after this code');
      process.nextTick(function() {
        t.equal(1, i, 'should emit the second item after this code');
        process.nextTick(function() {
          t.equal(2, i, 'should emit the third item after this code');
          process.nextTick(function() {
            t.equal(3, i, 'should have emitted all three items in the fourth tick');
            t.end();
          });
        });
      });
    });
});
