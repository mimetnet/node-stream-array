# stream-array

Pipe an Array through Node.js streams. This is rather useful for testing other
streams.

[![npm version][1]][2] [![build status][3]][4] [![dependencies][5]][6] [![devDependencies][7]][8]

 [![testling][9]][10]


## Usage

```js
var streamify = require('stream-array'),
    os = require('os');

streamify(['1', '2', '3', os.EOL]).pipe(process.stdout);
```


## API

#### streamify(Array)
Provide an Array to streamify which will be iterated over. Each element will
dequeued and pushed into the following piped stream.


## Install

```
npm install stream-array
```

  [1]: https://badge.fury.io/js/stream-array.svg
  [2]: https://badge.fury.io/js/stream-array
  [3]: https://api.travis-ci.org/mimetnet/node-stream-array.svg
  [4]: https://travis-ci.org/mimetnet/node-stream-array
  [5]: https://david-dm.org/mimetnet/node-stream-array.svg
  [6]: https://david-dm.org/mimetnet/node-stream-array
  [7]: https://david-dm.org/mimetnet/node-stream-array/dev-status.svg?#info=devDependencies
  [8]: https://david-dm.org/mimetnet/node-stream-array/#info=devDependencies
  [9]: https://ci.testling.com/mimetnet/node-stream-array.png
  [10]: https://ci.testling.com/mimetnet/node-stream-array

