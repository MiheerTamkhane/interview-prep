let promiseOne = Promise.resolve("First");
let promiseTwo = Promise.resolve("Two");
let promiseThree = Promise.resolve("Three");

Promise.myAll = function (promises = []) {
  return new Promise((resolve, reject) => {
    let results = [];
    if (!promises.length) {
      return results;
    }
    let pending = promises.length;
    promises.forEach((promise, idx) => {
      Promise.resolve(promise).then((result) => {
        results[idx] = result;
        pending--;

        if (pending === 0) {
          resolve(results);
        }
      }, reject);
    });
  });
};

Promise.myAll([promiseOne, promiseTwo, promiseThree]).then((res) =>
  console.log(res)
);
