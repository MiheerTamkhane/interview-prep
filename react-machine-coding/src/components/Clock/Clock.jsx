import React, { useEffect, useState, useRef } from "react";

export const Clock = () => {
  const [hide, setHide] = useState(false);
  return (
    <div>
      {!hide && <Time />}
      <button onClick={() => setHide(!hide)}>Toggle hide!</button>
    </div>
  );
};

const Time = () => {
  const [time, setTime] = useState(new Date());
  const timeout = useRef(null);

  useEffect(() => {
    timeout.current = setInterval(() => {
      setTime(new Date());
      console.log("hi");
    }, 1000);

    return () => clearInterval(timeout.current);
  }, [timeout.current]);
  const timeString = time.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
  console.log(time, timeout);
  return <h1>{timeString}</h1>;
};
