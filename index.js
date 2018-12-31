
module.exports = function defer() {

  let args = [];
  const promise = new Promise((...promiseArgs) => args = promiseArgs);
  [promise.resolve, promise.reject] = args;

  return promise;
}

