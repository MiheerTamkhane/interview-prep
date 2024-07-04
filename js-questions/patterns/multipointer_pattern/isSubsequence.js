function isSubsequence(str1, str2) {
  let i = 0;
  let j = 0;
  for (j; j < str2.length; j++) {
    if (str1[i] === str2[j]) {
      i++;
    }
    if (i === str1.length) {
      return true;
    }
  }
  return false;
}

console.log(isSubsequence("abc", "acb")); // false (order matters)
console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "stingdf")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
