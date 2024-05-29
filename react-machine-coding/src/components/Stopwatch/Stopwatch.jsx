import { useRef, useState } from "react";
import "./Stopwatch.css";
export const Stopwatch = () => {
  const [sec, setSec] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  let timeout = useRef(null);

  function startWatch() {
    if(timeout.current) clearTimeout(timeout.current)
    timeout.current = setInterval(() => {
      setSec((prev) => prev + 1);
    }, 1000);
    setIsPaused(false);
  }

  function pauseWatch() {
    clearInterval(timeout.current);
    setIsPaused(true);
  }

  function killWatch() {
    setSec(0);
    pauseWatch();
    timeout.current = null;
    setIsPaused(false);
  }

  function formateDate(time) {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    return `${minutes < 10 ? "0" + minutes : minutes}: ${
      seconds < 10 ? "0" + seconds : seconds
    }`;
  }
  console.log("timeout : ", timeout, sec, formateDate(sec));
  return (
    <div>
      <h1>{formateDate(sec)}</h1>
      <div className="button-wrapper">
        <button
          className="pause"
          onClick={() => {
            if (isPaused) {
              startWatch();
            } else {
              pauseWatch();
            }
          }}
        >
          {isPaused ? "Resume" : "Pause"}
        </button>
        <button
          className="start"
          onClick={() => {
            startWatch();
          }}
        >
          Start
        </button>
        <button className="kill" onClick={() => killWatch()}>
          Kill
        </button>
      </div>
    </div>
  );
};
