function isPalindrom(str) {
  return str === str.split("").reverse().join("");
}

console.log(isPalindrom("madam"));
console.log(isPalindrom("tayota"));
console.log(isPalindrom("naman"));
