import { useState } from "react";

export default function Analyttica() {
  const [todoList, setTodoList] = useState<string[]>([]);
  const [inputText, setInputText] = useState("");

  function submitHandler(e) {
    e.preventDefault();
    setTodoList((prevList) => [...prevList, inputText]);
    setInputText("");
  }

  // console.log(todoList);
  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <hr />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}

type TodoListPrams = {
  todoList: string[];
  setTodoList: React.Dispatch<React.SetStateAction<string[]>>;
};
const TodoList = ({ todoList, setTodoList }: TodoListPrams) => {
  function removeItemHandler(item: string, index: number) {
    console.log("her : ", item, index, todoList);
    setTodoList((prevList) => prevList.filter((item, idx) => idx !== index));
    // setTodoList((prevList: string[]) => todoList.splice(index, 1));
  }

  const arrOfNum = [1, 2, 2, 4, 5, 6, 6, 7, 3, 2];
  type UniqueArr = number[];
  const unique: UniqueArr = [];
  for (let i = 0; i < arrOfNum.length; i++) {
    if (!unique.includes(arrOfNum[i])) {
      unique.push(arrOfNum[i]);
    }
  }
  //   console.log(unique);
  let myArray = ["a", "b", "c", "d"];
  myArray = ["start", ...myArray, "end"];

  console.log(myArray);
  ["start", "a", "b", "c", "d", "end"];

  return (
    <ul>
      {todoList.map((item, index) => (
        <li key={index} onClick={() => removeItemHandler(item, index)}>
          {item}
        </li>
      ))}
    </ul>
  );
};
