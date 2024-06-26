const fibonacciClosure = (() => {
  let temp = [0];
  let i = 1;
  return function fibo() {
    if (temp.length <= 1) {
      temp.push(i);
      i++;
    } else {
      temp.push(temp[temp.length - 1] + temp[temp.length - 2]);
      console.log(temp[temp.length - 1]);
      return temp[temp.length - 1];
    }
  };
})();

// const fibonacciClosure = (() => {
//   let past = 0;
//   let curr = 1;
//   let res = 0;
//   return function fibo() {
//     res = past + curr;
//     past = curr;
//     curr = res;
//     console.log(res);
//     return res;
//   };
// })();

fibonacciClosure(); // 0
fibonacciClosure(); // 1
fibonacciClosure(); // 1
fibonacciClosure(); // 2
fibonacciClosure(); // 3
fibonacciClosure(); // 5
fibonacciClosure(); // 8
