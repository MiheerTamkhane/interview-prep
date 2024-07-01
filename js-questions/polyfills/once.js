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
