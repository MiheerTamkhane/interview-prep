function recursiveMulti(a, b) {
  if (b === 0) {
    return 0;
  }

  return a + recursiveMulti(a, b - 1);
}

console.log(recursiveMulti(2, 4));
