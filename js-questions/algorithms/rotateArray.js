function rotateArray(arr, n) {
  if (n < 0) {
    n = n + arr.length;
  }
  for (let i = 0; i < n; i++) {
    arr.unshift(arr.pop());
  }
  return arr;
}

// const rotateArray = (arr, k) => arr.slice(k).concat(arr.slice(0, k));

console.log(rotateArray([1, 2, 3, 4, 5], 2));
console.log(rotateArray([1, 2, 3, 4, 5], -2));
console.log(rotateArray([1, 2, 3, 4, 5], -4));
console.log(rotateArray([1, 2, 3, 4, 5], 3));
