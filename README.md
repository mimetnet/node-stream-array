# stream-array

Pipe an Array through Node.js streams. This is rather useful for testing other
streams.

[![build status][1]][2]

## Usage

```js
var streamify = require('stream-array'),
    os = require('os');

streamify(['1', '2', '3', os.EOL]).pipe(process.stdout);
```

## Install

```
npm install stream-array
```

  [1]: https://api.travis-ci.org/mimetnet/node-stream-array.png
  [2]: https://travis-ci.org/mimetnet/node-stream-array
