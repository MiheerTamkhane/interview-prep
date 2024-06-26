Array.prototype.flatArr = function (depth) {
  const flatten = (arr, depth) => {
    let result = [];
    arr.forEach((element) => {
      if (Array.isArray(element) && depth > 0) {
        result.push(...flatten(element, depth - 1));
      } else {
        result.push(element);
      }
    });
    return result;
  };

  return flatten(this, depth);
};

console.log([1, [2, [3, [4]]]].flatArr(Infinity));
