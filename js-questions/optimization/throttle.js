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
