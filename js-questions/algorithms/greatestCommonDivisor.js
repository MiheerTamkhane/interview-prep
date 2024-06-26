function greatestCommonDivisor(a, b) {
  let gcd = 1;
  if (a <= 0 && b <= 0) {
    return 1;
  }
  for (let i = 2; i <= a && i <= b; i++) {
    if (a % i === 0 && b % i === 0) {
      gcd = i;
    }
  }
  return gcd;
}

// function greatestCommonDivisor(a, b) {
//   if (b == 0) return a;
//   else return greatestCommonDivisor(b, a % b);
// }

console.log(greatestCommonDivisor(14, 21));
console.log(greatestCommonDivisor(69, 169));
