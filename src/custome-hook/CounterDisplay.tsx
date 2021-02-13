import React, { useState } from "react";
import { requirePropFactory } from "@material-ui/core";

interface counterDisplayProps {
  count: number;
  increment: () => any;
  decrement: () => any;
}

type Props = counterDisplayProps;


const CounterDisplay: React.FC<Props> = ({
  count,
  increment,
  decrement
}) => {
  return (
    <>
      <div>
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
      </div>
    </>
  )
}

export default CounterDisplay;