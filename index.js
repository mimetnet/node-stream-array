'use strict'

const Readable = require('stream');

/**
 * Create a new instance of StreamArray
 *
 * @module stream-array
 * @desc Push Array elements through a Node.js stream
 * @type {function}
 * @param {Array} list An Array of objects, strings, numbers, etc
 */
module.exports = function(list) {
    return Readable.from(list);
};
