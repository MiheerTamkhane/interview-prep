function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let square = arr1[i] * arr1[i];
    if (square !== arr2[i]) {
      return false;
    }
  }
  return true;
}

console.log(same([1, 2, 3], [1, 4, 9]));
console.log(same([1, 2, 3], [1, 4, 7]));
