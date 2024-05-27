// Polyfill for Array.map();

Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

// console.log([1, 2, 3].myMap((item) => item * 2));

// Polyfill for Array.filter();

Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      temp.push(this[i]);
    }
  }
  return temp;
};

// console.log([1, 2, 3].myFilter((item) => item >= 2));

// Polyfill for Array.reduce();

Array.prototype.myReduce = function (cb, initialValue) {
  let acc = initialValue;
  for (let i = 0; i < this.length; i++) {
    acc = acc ? cb(acc, this[i], i, this) : this[i];
  }
  return acc;
};

// console.log([1, 2, 3].myReduce((acc, curr) => acc + curr));

// Polyfill for Function.call();

const car = {
  company: "Tata",
  type: "SUV",
};

Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error("Cannot call function");
  }
  context.fn = this;
  return context.fn(...args);
};

function myCar(name, price) {
  return `I bought ${this.company} ${this.type} Model ${name} in just Rupees ${price}.`;
}

// console.log(myCar.myCall(car, "Harier", 1600000));

Function.prototype.myApply = function (context = {}, args) {
  if (typeof this !== "function") {
    throw new Error("Cannot call function");
  }

  if (!Array.isArray(args)) {
    throw new TypeError("args must be an array");
  }
  context.fn = this;
  return context.fn(...args);
};

function myCar2(name, price) {
  return `I bought ${this.company} ${this.type} Model ${name} in just Rupees ${price}.`;
}
// console.log(myCar2.myApply(car, ["Harier", 1600000]));

// Polyfill for Function.bind();

Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error("Cannot call function");
  }
  // context.fn = this;
  const newFn = this;
  return function (...newArgs) {
    return newFn.call(context, ...newArgs, ...args);
  };
};

const obj = {
  x: 42,
  getX: function () {
    return this.x;
  },
};

const unboundGetX = obj.getX;
// console.log(unboundGetX()); // The function gets invoked at the global scope
// Expected output: undefined

const boundGetX = unboundGetX.myBind(obj);
// console.log(boundGetX());
// console.log(obj);
// Expected output: 42

// Polyfill for once();
function myOnce(func, context = {}) {
  let flag;
  return function () {
    if (func) {
      flag = func.call(context || this, arguments);
      func = null;
    }
    return flag;
  };
}

const hello = myOnce(() => console.log("hello"));

// hello();
// hello();

// Polyfill for Array.prototype.flat();
Array.prototype.myFlat = function (depth = 1) {
  const flattened = (arr, depth) => {
    let result = [];
    arr.forEach((ele) => {
      if (Array.isArray(ele) && depth > 0) {
        result.push(...flattened(ele, depth - 1));
      } else {
        result.push(ele);
      }
    });

    return result;
  };
  return flattened(this, depth);
};

// console.log([1, 2, [3, [4]]].myFlat(1));

// Promise.all() polyfill.

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

// Deboucing polyfill in js.
function debounce(cb, delay = 500) {
  let timer;
  return function (...args) {
    if (timer) clearInterval(timer);

    timer = setTimeout(() => cb.apply(this, args), delay);
  };
}

// Throttling polyfill in js.
function throttle(cb, delay = 500) {
  let flag = false;
  return function (...args) {
    if (!flag) {
      cb.apply(this, args);
      setTimeout(() => {
        flag = false;
      }, delay);
      flag = true;
    }
  };
}
