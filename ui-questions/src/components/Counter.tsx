import React, { useReducer } from "react";

type StateProps = {
  count: number;
};

// type ActionProps = {
//   type: "increment" | "decrement" | "reset";
//   payload?: number;
// };

// descriminated unions in typescript.

type ActionPayload = {
  type: "increment" | "decrement";
  payload: number;
};

type ResetPayload = {
  type: "reset";
};

type ActionProps = ActionPayload | ResetPayload;

const initialState = {
  count: 0,
};

function reducer(state: StateProps, action: ActionProps) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h2>Typing the useReducer Hook.</h2>
      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        Inc
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>
        Dec
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      {state.count}
    </div>
  );
};

export default Counter;
