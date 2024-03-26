import React, { useState } from "react";

const todos = [
  {
    id: 1,
    title: "NeoG assignments",
    completed: false,
  },
  {
    id: 2,
    title: "Pair programming session",
    completed: true,
  },
  {
    id: 3,
    title: "Project submission",
    completed: false,
  },
  {
    id: 4,
    title: "Coding practice",
    completed: true,
  },
];

const Question2 = () => {
  const [data, setData] = useState(todos);
  function handleClick(flag: any): void {
    if (flag === "all") {
      setData(todos);
    } else {
      const filteredData = todos.filter((d) => flag === d.completed);
      setData(filteredData);
    }
  }
  return (
    <div>
      <ul>
        <li> - Your challenge is to add a filter to do the following</li>
        <li> - Show completed todos</li>
        <li> - Show incomplete todos</li>
        <li> - Show all todos</li>
        <li>- The todos data structure is as follows</li>
      </ul>
      <div>
        <button
          onClick={() => {
            handleClick("all");
          }}
        >
          All
        </button>
        <button
          onClick={() => {
            handleClick(true);
          }}
        >
          Completed
        </button>
        <button
          onClick={() => {
            handleClick(false);
          }}
        >
          In-Completed
        </button>
      </div>
      <ul>
        {data.map((item) => (
          <li>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Question2;
