function debounce(cb, delay = 500) {
  let timeout = null;
  return function (...args) {
    console.log("called...");
    if (timeout) clearTimeout(timeout);

    timeout = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}

function greet() {
  console.log("hello");
}

const debouncedFn = debounce(greet);

let flag = 0;
let int = setInterval(() => {
  if (flag === 10) {
    clearInterval(int);
  }
  console.log("hi", flag);
  debouncedFn();
  flag++;
}, 400);
