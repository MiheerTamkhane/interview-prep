function isPrime(number) {
  let factors = [];
  for (let i = 2; 2 < number; i++) {
    if (number % i === 0) {
      factors.push(i);
      number = number / i;
    }
  }
  return factors;
}

console.log(isPrime(6));
console.log(isPrime(7));
console.log(isPrime(1));
console.log(isPrime(137));
console.log(isPrime(237));
console.log(isPrime(2));
console.log(isPrime(4));
console.log(isPrime(69));
