let sum = 0;
function calculate(n) {
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}

function memoize(fn) {
  let cache = {};
  console.log(cache);
  return function (...args) {
    let param = args[0];
    if (param in cache) {
      return cache[param];
    } else {
      let result = fn(param);
      cache[param] = result;
      return result;
    }
  };
}

const memoizeFunction = memoize(calculate);

console.time();
console.log(memoizeFunction(34));
console.timeEnd();

console.time();
console.log(memoizeFunction(34));
console.timeEnd();
