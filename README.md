# deferitize

Native ES6 promises, with deferred resolution style.  Promises are great and work 90% of the time, however occasionally it is more convenient returning promise while preserving the ability to reject / resolve it outside the scope of when the promise is created.

## Usage

```JavaScript

const deferitize = require('deferitize');

const newPromise = deferitize();

newPromise.then((result) => console.log(result));

setTimeout(function someArbiraryTimeLaterz() {
  newPromise.resolve('sup');
  // console logs "sup"
}, 100);

```

This module essentially pushes `resolve` and `reject` onto a standard ES6 promise.  This might make people wince and call foul as this module consciously breaks responsibilities and gives power to code that receives the promise the ability to resolve it.  With great power comes great responsibility.