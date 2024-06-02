import React, { useEffect, useRef, useState } from "react";
import "./Style.css";
export const Pagination = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const title = useRef(0);
  async function fetchData() {
    try {
      const data = await fetch("https://jsonplaceholder.typicode.com/posts");
      const result = await data.json();
      setData(result);
    } catch (e) {
      console.error(e);
    }
  }
  useEffect(() => {
    fetchData();
    console.log("effect runs...");
  }, []);

  useEffect(() => {
    document.title = page;
    console.log("2nd effect runs...");
  }, [page]);

  return (
    <div>
      <h1>Pagination</h1>
      {/* <Counter /> */}
      {data?.slice(page * 10 - 10, page * 10).map(({ id, title, body }) => (
        <Message key={id} id={id} title={title} body={body} />
      ))}
      <button onClick={() => setPage((prev) => prev - 1)}>Previous</button>
      <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
    </div>
  );
};

function Counter() {
  const [count, setCount] = useState(0);
  const step = useRef(1);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((c) => c + step.current);
    }, 1000);
    console.log("is it runs...", id);
    return () => clearInterval(id);
  }, [step.current]);

  return (
    <>
      <h1>{count}</h1>
      <input
        value={step.current}
        onChange={(e) => {
          step.current = Number(e.target.value);
        }}
      />
    </>
  );
}

const Message = ({ id, title, body }) => {
  return (
    <div className="message">
      <h2>
        {id} {title}
      </h2>
      <br />
      <p>{body}</p>
    </div>
  );
};
