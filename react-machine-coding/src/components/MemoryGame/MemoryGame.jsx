import { useRef, useState } from "react";
import "./Game.css";
import { data } from "./data";
export const MemoryGame = () => {
  const [items, setItems] = useState(
    [
      {
        id: 1,
        color: "brown",
        stat: "active",
      },
      {
        id: 2,
        color: "cornflowerblue",
        stat: "",
      },
      {
        id: 3,
        color: "darkCyan",
        stat: "wrong",
      },
      {
        id: 3,
        color: "darkCyan",
        stat: "",
      },
      {
        id: 1,
        color: "brown",
        stat: "correct",
      },
      {
        id: 2,
        color: "cornflowerblue",
        stat: "",
      },
    ].sort(() => Math.random() - 0.5)
  );
  const prev = useRef(-1);
  const compare = (index) => {
    if (prev.current === items[index].id) {
      items[index].stat = "correct";
      items[prev.current].stat = "correct";
      setItems([...items]);
      prev.current = -1;
    } else {
      items[index].stat = "wrong";
      items[prev.current].stat = "wrong";
      setItems([...items]);
      setTimeout(() => {
        items[index].stat = "";
        items[prev.current].stat = "";
        setItems([...items]);
        prev.current = -1;
      }, 1000);
    }
  };
  const handleClick = (index) => {
    if (prev.current === -1) {
      items[index].stat = "active";
      prev.current = items[index]?.id;
      setItems([...items]);
    } else {
      compare(index);
    }
  };
  return (
    <div>
      <h1>Memory Game</h1>
      <div className="container">
        {items.map(({ id, color, index }) => (
          <Card
            key={index}
            color={color}
            index={index}
            handleClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
};

const Card = (props) => {
  const { id, color, index, handleClick } = props;

  return (
    <div className="scene">
      <div
        className={`card`}
        style={{ backgroundColor: color }}
        onClick={() => handleClick(index)}
      >
        <div className="card_face card_face--front">Face</div>
        <div className="card_face card_face--back">Back</div>
      </div>
    </div>
  );
};
