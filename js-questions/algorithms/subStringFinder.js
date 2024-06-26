function subStringFinder(string, subString) {
  return string.indexOf(subString);
}
console.log(subStringFinder("abbcdabbbbbck", "ab"));

console.log(subStringFinder("abbcdabbbbbck", "bck"));

//doesn't work for this one.
console.log(subStringFinder("abbcdabbbbbck", "bbbck"));
