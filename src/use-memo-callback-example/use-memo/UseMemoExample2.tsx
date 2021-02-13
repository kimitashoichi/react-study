import React, { useMemo, useState } from "react";

// レンダリングのメモ化

export const UseMemoRenderComponent: React.FC = () => {
  const [count1, setCount1] = useState<number>(0);
  const [count2, setCount2] = useState<number>(0);

  const loop = (value: number) => {
    let i = 0;
    while (i < 1000000000) {
      i++
    }
    return value * 2
  }

  const Counter = useMemo(() => {
    console.log("render counter!");
    const doubleCount = loop(count2)

    return (
      <p>Counter: {count2}, {doubleCount}</p>
    )
  }, [count2])

  return (
    <>
      <h2>Increment count1</h2>
      <p>Counter: {count1}</p>
      <button onClick={() => setCount1(count1 + 1)}>Increment count1</button>

      <h2>Increment count2</h2>
      {Counter}
      <button onClick={() => setCount2(count2 + 1)}>Increment count2</button>
    </>
  )
}