// implement recursion function to print every character of string , after that its should print "its vowel" for every vowel from string.

let updatedStr = "";
function stringOp(str, len = 0) {
  updatedStr = str;
  if (len >= str.length) {
    return updatedStr;
  }
  const char = str[len];
  if (["a", "e", "i", "o", "u"].includes(char)) {
    let arr = str.split("");
    arr[len] = "x";
    str = arr.join("");
  }
  return stringOp(str, len + 1);
}

console.log(stringOp("hello"));
