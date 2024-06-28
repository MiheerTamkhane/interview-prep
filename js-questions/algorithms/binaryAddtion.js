// Asked in Yugabyte Interview.
const a = 111;
const b = 101;
// 1100
// a + b =>1100
function binaryAddition(a, b) {
  let first = a.toString();
  let second = b.toString();
  let sum = "";
  if (first.length <= second.length) {
    let remainings = second.length - first.length || first.length;
    for (let i = remainings - 1; i >= remainings; i--) {
      console.log("i", i);
      first = "0" + first;
      // sum += first[remainings - i] % second[remainings - i];
    }
    let temp = 0;
    for (let i = first.length - 1; i >= 0; i--) {
      //  sum = (+first[i] % (+second[i] || temp)) + sum;
      if (+first[i] && +second[i] && temp) {
        sum = temp + sum;
      } else {
        sum = ((+first[i] + (+second[i] || temp)) % 2) + sum;
      }

      temp = Math.ceil((+first[i] + (+second[i] || temp)) / 2);
    }
    sum = temp + sum;
  } else {
    let remainings = second.length - first.length;
    for (let i = 0; i < remainings; i++) {
      second = "0" + second;
    }
  }
  console.log(sum);
}

binaryAddition(a, b);

console.log(parseInt(a, 2) + parseInt(b, 2), parseInt(1100, 2));
