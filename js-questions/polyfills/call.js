const car = {
  company: "Tata",
  type: "SUV",
};

Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error("Cannot call function");
  }
  context.fn = this;
  return context.fn(...args);
};

function myCar(name, price) {
  return `I bought ${this.company} ${this.type} Model ${name} in just Rupees ${price}.`;
}

console.log(myCar.myCall(car, "Harier", 1600000));
