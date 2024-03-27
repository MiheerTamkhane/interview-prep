import React, { useState } from "react";

const Question2 = () => {
  return (
    <div>
      <TodoApp />
    </div>
  );
};

export default Question2;

const TodoApp = () => {
  const data = [
    {
      id: "c1",
      brand: "Toyota",
      make: "Corolla",
      model: "2007",
    },
    {
      id: "c2",
      brand: "Maruti Suzuki",
      make: "Omni",
      model: "2003",
    },
    {
      id: "c3",
      brand: "Hyundai",
      make: "Santro",
      model: "2005",
    },
  ];
  const [todos, setTodos] = useState(data);
  return (
    <>
      {todos.map((todo) => (
        <li>
          {todo.brand} - {todo.make} - {todo.model}
        </li>
      ))}
    </>
  );
};
