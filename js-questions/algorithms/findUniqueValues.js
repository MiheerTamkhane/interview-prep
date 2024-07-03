function findUniqueValues(...args) {
  const arr = args.flat(2);
  const result = [];
  let lookup = {};
  for (let val of arr) {
    lookup[val] = (lookup[val] || 0) + 1;
  }
  Object.keys(lookup).forEach((item) => {
    if (lookup[item] === 1) {
      result.push(Number(item));
    }
  });

  return result;
}

console.log(findUniqueValues([1, 2, 3], [2, 3, 4], [3, 4, 5]));
