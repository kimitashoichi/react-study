import React, { useReducer } from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

// 初期値
const initalState = 0;

// reducer関数の定義
const reducerFunction = (count: number, action: string) => {
  switch (action) {
    case "increment":
      return count + 1;
    case "decrement":
      return count - 1;
    case "reset":
      return initalState;
    default:
      return count;
  }
}

const UseReducerA = () => {
  const [count, dispatch] = useReducer(reducerFunction, initalState);

  return (
    <>
      <h2>カウント：{count}</h2>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button onClick={() => dispatch("increment")}>+</Button>
        <Button onClick={() => dispatch("decrement")}>-</Button>
        <Button onClick={() => dispatch("reset")}>0</Button>
      </ButtonGroup>
    </>
  )
};

export default UseReducerA;