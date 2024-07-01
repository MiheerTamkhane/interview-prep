function areThereDuplicates(...args) {
  let freq = {};
  for (let val of args) {
    if (freq[val]) {
      return true;
    } else {
      freq[val] = (freq[val] || 0) + 1;
    }
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true
