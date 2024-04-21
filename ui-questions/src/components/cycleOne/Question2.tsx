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
      id: 1,
      text: "First Todo",
      completed: true,
    },
    {
      id: 2,
      text: "Second Todo",
      completed: false,
    },
  ];
  type Todo = {
    id: number;
    text: string;
    completed: boolean;
  };

  const [todos, setTodos] = useState<Todo[]>(data);
  const [input, setInput] = useState<string>("");
  function handleAddTodo() {
    const item = {
      id: Math.random(),
      text: input,
      completed: false,
    };
    setTodos((prevTodos) => [item, ...prevTodos]);
    setInput("");
  }

  function completeTodoHandler(id: number) {
    setTodos((prevTodos) =>
      prevTodos.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  }
  return (
    <>
      <input
        type="text"
        placeholder="Add Todos..."
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      {todos?.map((todo) => (
        <li
          key={todo.id}
          style={todo.completed ? { textDecoration: "line-through" } : {}}
        >
          {todo.text}
          <button
            style={{ marginLeft: "5px" }}
            onClick={() => completeTodoHandler(todo.id)}
          >
            {todo.completed ? "Incomplete" : "Complete"}
          </button>
        </li>
      ))}
    </>
  );
};
