'use strict'

var Readable = require('readable-stream').Readable
;

/**
 * Create a new instance of StreamArray
 *
 * @access private
 * @param {Array} list
 */
function StreamArray(list) {
    if (!Array.isArray(list))
        throw new TypeError('First argument must be an Array');

    Readable.call(this, {objectMode:true});

    this._i = 0;
    this._l = list.length;
    this._list = list;
}

StreamArray.prototype = Object.create(Readable.prototype, {constructor: {value: StreamArray}});

/**
 * Read the next item from the source Array and push into NodeJS stream

 * @access protected
 * @desc Read the next item from the source Array and push into NodeJS stream
 * @param {number} size The amount of data to read (ignored)
 */
StreamArray.prototype._read = function(size) {
    var self = this;
    process.nextTick(function() {
        self.push(self._i < self._l ? self._list[self._i++] : null);
    });
};

/**
 * Create a new instance of StreamArray
 *
 * @module stream-array
 * @desc Push Array elements through a NodeJS stream
 * @type {function}
 * @param {Array} list An Array of objects, strings, numbers, etc
 */
module.exports = function(list) {
    return new StreamArray(list);
};
