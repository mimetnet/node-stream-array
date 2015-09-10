var Readable = require('readable-stream').Readable
;

function StreamArray(list) {
    if (!Array.isArray(list))
        throw new TypeError('First argument must be an Array');

    Readable.call(this, {objectMode:true});

    this._i = 0;
    this._l = list.length;
    this._list = list;
}

StreamArray.prototype = Object.create(Readable.prototype, {constructor: {value: StreamArray}});

StreamArray.prototype._read = function(size) {
    var self = this;
    process.nextTick(function() {
        self.push(self._i < self._l ? self._list[self._i++] : null);
    });
};

module.exports = function(list) {
    return new StreamArray(list);
};
