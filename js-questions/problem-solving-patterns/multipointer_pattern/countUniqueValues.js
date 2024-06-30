// function countUniqueValues(arr) {
//   let obj = {};
//   for (let val of arr) {
//     obj[val] = (obj[val] || 0) + 1;
//   }
//   return Object.keys(obj).length;
// }

function countUniqueValues(arr) {
  let i = 0;
  let j = i + 1;
  for (j; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
    }
    arr[i] = arr[j];
  }
  return arr.length ? i + 1 : i;
}
console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 14])); // 7
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4
console.log(countUniqueValues([])); // 4
