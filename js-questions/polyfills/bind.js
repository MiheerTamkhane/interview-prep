Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error("Cannot call function");
  }
  // context.fn = this;
  const newFn = this;
  return function (...newArgs) {
    return newFn.call(context, ...newArgs, ...args);
  };
};

const obj = {
  x: 42,
  getX: function () {
    return this.x;
  },
};

const unboundGetX = obj.getX;
// console.log(unboundGetX()); // The function gets invoked at the global scope
// Expected output: undefined

const boundGetX = unboundGetX.myBind(obj);
// console.log(boundGetX());
// console.log(obj);
// Expected output: 42
