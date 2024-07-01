function digitFrequency(a, b) {
  let num1 = a.toString();
  let num2 = b.toString();
  if (num1.length !== num2.length) return false;

  let lookup = {};
  for (let val of num1) {
    lookup[val] = (lookup[val] || 0) + 1;
  }
  for (let char of num2) {
    if (!lookup[char]) {
      return false;
    } else {
      lookup[char] -= 1;
    }
  }
  return true;
}

console.log(digitFrequency(182, 281)); // true
console.log(digitFrequency(18, 28)); // false
