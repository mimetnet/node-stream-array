# stream-array

Pipe an Array through Node.js streams. This is rather useful for testing other
streams.

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
