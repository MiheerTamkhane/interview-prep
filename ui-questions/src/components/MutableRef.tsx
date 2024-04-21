import React, { useEffect, useRef, useState } from "react";

const MutableRef = () => {
  const [time, setTime] = useState<number>(0);
  const intervalRef = useRef<number | null>(null);

  const stopInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTime((t: number) => t + 1);
    }, 1000);
    return () => {
      stopInterval();
    };
  }, []);
  return (
    <div>
      <h2>Counter </h2>
      <button onClick={() => stopInterval()}>Stop</button>
      <h1>Timer : {time}</h1>
    </div>
  );
};

export default MutableRef;
