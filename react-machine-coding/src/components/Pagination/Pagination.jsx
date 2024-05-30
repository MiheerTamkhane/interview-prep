import React, { useEffect, useState } from "react";
import "./Style.css";
export const Pagination = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
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
  }, []);
  return (
    <div>
      <h1>Pagination</h1>
      {data?.slice(page * 10 - 10, page * 10).map(({ id, title, body }) => (
        <Message key={id} id={id} title={title} body={body} />
      ))}
      <button onClick={() => setPage((prev) => prev - 1)}>Previous</button>
      <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
    </div>
  );
};

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
