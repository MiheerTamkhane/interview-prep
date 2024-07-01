"use strict";
Object.defineProperty(Object.prototype, "objectLength", {
  get: function () {
    return Object.keys(this).length;
  },
});

const obj = {
  name: "Miheer",
  age: 23,
};

console.log(obj.objectLength);
