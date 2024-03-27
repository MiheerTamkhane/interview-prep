import React, { useState } from "react";

const Question1 = () => {
  return (
    <div>
      <FilterBrands />
      <SortTodoList />
    </div>
  );
};

export default Question1;

const FilterBrands = () => {
  const brands1 = [
    { id: "0a", brandName: "puma" },
    { id: "0b", brandName: "adiddas" },
    { id: "0c", brandName: "wildcraft" },
    { id: "0d", brandName: "levis" },
    { id: "0e", brandName: "celio" },
  ];
  const [filteredBrands, setFilteredBrands] = useState(brands1);

  const filterBrandsHandler = (value: string): void => {
    const data = brands1?.filter((item) => item.brandName.includes(value));
    setFilteredBrands(data);
  };
  return (
    <div>
      <ul>
        <li>- Your challenge is to build a brand filter for products.</li>
        <li>
          - The parameters for the brand filter, i.e, brand names should appear
          when you search for the brand name in an input box
        </li>
      </ul>
      <input
        type="text"
        placeholder="search brand..."
        onChange={(e) => {
          filterBrandsHandler(e.target.value);
        }}
      />
      <ul>
        {filteredBrands?.map((item) => (
          <li>{item.brandName}</li>
        ))}
      </ul>
    </div>
  );
};

const SortTodoList = () => {
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
