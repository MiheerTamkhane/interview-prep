// Solved using frequency counter pattern.

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let fCounter1 = {};
  let fCounter2 = {};
  for (let val of str1) {
    fCounter1[val] = (fCounter1[val] || 0) + 1;
  }
  for (let val of str2) {
    fCounter2[val] = (fCounter2[val] || 0) + 1;
  }
  for (let key in fCounter1) {
    if (fCounter1[key] !== fCounter2[key]) {
      return false;
    }
  }
  return true;
}

function isAnagram1(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  let lookup = {};
  for (let val of first) {
    lookup[val] = (lookup[val] || 0) + 1;
  }

  for (let val of second) {
    if (!lookup[val]) {
      return false;
    } else {
      lookup[val] -= 1;
    }
  }
  return true;
}

console.log(isAnagram1("star", "rast"));
console.log(isAnagram1("rat", "car"));
console.log(isAnagram1("", ""));
