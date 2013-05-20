var Readable = require('stream').Readable;

if (!Readable) {
    Readable = require('readable-stream/readable');
}

function StreamArray(list) {
    if (!(this instanceof(StreamArray)))
        return new StreamArray(list);
    if (!Array.isArray(list))
        throw new TypeError('First argument must be an Array');

    Readable.call(this, {objectMode:true});

    this._list = list;
}

StreamArray.prototype = Object.create(Readable.prototype, {constructor: {value: StreamArray}});

StreamArray.prototype._read = function(size) {
    if (0 < this._list.length) {
        this.push(this._list.shift());
    } else {
        this.push(null);
    }
};

module.exports = function(list) {
    return new StreamArray(list);
};
