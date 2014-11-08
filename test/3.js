var test = require('tape')
    , streamify = require('..')
;

test('ctor', function(t) {
    t.throws(function() {
        streamify();
    }, {name:'TypeError', message:'First argument must be an Array'}, 'Throws TypeError');

    t.doesNotThrow(function() {
        streamify([]);
    }, 'Valid argument');

    t.end();
});
