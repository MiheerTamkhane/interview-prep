function swapTwoNumbers(a, b) {
  console.log("a : ", a, " b : ", b);
  [a, b] = [b, a];
  console.log("a : ", a, " b : ", b);
}

swapTwoNumbers(2, 3);
