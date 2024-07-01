Function.prototype.myApply = function (context = {}, args) {
  if (typeof this !== "function") {
    throw new Error("Cannot call function");
  }

  if (!Array.isArray(args)) {
    throw new TypeError("args must be an array");
  }
  context.fn = this;
  return context.fn(...args);
};

function myCar2(name, price) {
  return `I bought ${this.company} ${this.type} Model ${name} in just Rupees ${price}.`;
}
console.log(myCar2.myApply(car, ["Harier", 1600000]));
