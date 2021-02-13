import React, { useReducer } from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

interface Count {
  firstConut: number
  secondCount: number
}

// 初期値
const initalState: Count = {
  firstConut: 0,
  secondCount: 100
};

interface Action {
  type: string
  payload: number
}

// reducer関数の定義
const reducerFunction = (count: Count, action: Action) => {
  switch (action.type) {
    case "incrementA":
      return {
        ...count,
        firstConut: count.firstConut + action.payload
      }
    case "incrementB":
      return {
        ...count,
        secondCount: count.secondCount + action.payload
      }
    case "decrementA":
      return {
        ...count,
        firstConut: count.firstConut - action.payload
      }
    case "decrementB":
      return {
        ...count,
        secondCount: count.secondCount - action.payload
      }
    case "resetA":
      return {
        ...count,
        firstConut: initalState.firstConut
      }
    case "resetB":
      return {
        ...count,
        secondCount: initalState.secondCount
      }
    default:
      return count;
  }
}

const UseReducerB = () => {
  const [count, dispatch] = useReducer(reducerFunction, initalState);

  return (
    <>
      <h2>カウント1：{count.firstConut}</h2>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button onClick={() => dispatch({type: "incrementA", payload: 1})}>+</Button>
        <Button onClick={() => dispatch({type: "decrementA", payload: 1})}>-</Button>
        <Button onClick={() => dispatch({type: "resetA", payload: 1})}>0</Button>
      </ButtonGroup>
      <h2>カウント2：{count.secondCount}</h2>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button onClick={() => dispatch({type: "incrementB", payload: 1})}>+</Button>
        <Button onClick={() => dispatch({type: "decrementB", payload: 1})}>-</Button>
        <Button onClick={() => dispatch({type: "resetB", payload: 1})}>0</Button>
      </ButtonGroup>
    </>
  )
};

export default UseReducerB;