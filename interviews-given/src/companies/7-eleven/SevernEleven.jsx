import React from "react";

// 1, 2, 22, 11, 111, 0, -1; sort the array by ascending order.
const arr = [1, 2, 22, 11, 22, 111, 0, -1];
const newArr = arr.filter((item, index) => arr.indexOf(item) === index);
console.log(newArr.sort());
const sortedArr = newArr.sort((a, b) => a - b);
console.log(sortedArr);

// React.createElement(); use this api and create a structure.
const data = {
  tag: "div",
  id: { className: "col-md-12" },
  desc: "first",
  child: {
    tag: "div",
    id: { className: "card" },
    desc: "second",
    child: {
      tag: "div",
      id: { className: "card-header" },
      desc: "third",
      child: {
        tag: "h1",
        id: { className: "card-title" },
        desc: "fourth",
      },
    },
  },
};

function renderElement(obj = null) {
  return (
    obj &&
    React.createElement(
      obj?.tag,
      { className: obj?.id?.className },
      obj.desc,
      renderElement(obj?.child)
    )
  );
}

const SevernEleven = () => {
  return renderElement(data);
};

export default SevernEleven;
