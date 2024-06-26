function fibonacci(n) {
  let fibo = [0, 1];
  if (n <= 2) return n;
  for (let i = 2; i <= n; i++) {
    fibo.push(fibo[i - 1] + fibo[i - 2]);
  }
  return fibo;
}

// console.log(fibonacci(5));

function recursiveFibo(n) {
  if (n <= 1) return n;
  let result = recursiveFibo(n - 1) + recursiveFibo(n - 2);
  return result;
}

for (let i = 0; i < 10; i++) {
  console.log(recursiveFibo(i));
}
