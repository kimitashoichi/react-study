import React, { useState, useCallback } from "react";

interface childProps {
  handleClick: () => void;
}

export const Child: React.FC<childProps> = React.memo(props => {
  console.log("memo child component");
  return (
    <button onClick={props.handleClick}>child</button>
  )
})


// useCallbackを使用しない例
// NotUseCallbackComponentのstateが更新されるたびにメモ化したChildコンポーネントも再レンダリングされてしまう
// => handleClickの関数オブジェクトがレンダリングされるたびに異なるものになっているから
export const NotUseCallbackComponent: React.FC = () => {
  console.log("App");
  const [count, setCount] = useState<number>(0);
  
  const handleClick = () => {
    console.log("click!");
  }

  return (
    <>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment count</button>
      <Child handleClick={handleClick} />
  </>
  )
}


// useCallbackを使用した例
// useCallback(コールバック関数, 依存配列)
// 依存配列 = コールバック関数が依存している要素が格納された配列
// ex) const callback = useCallback(() => console.log(count), [count]);
// countの更新がなければ同じ関数オブジェクトとしてみなすことができる
// コールバック関数が依存している配列がなければ、空の配列を渡せばOK


// setCount関数を実行してもhandleClickをメモ化しているので、Childコンポーネントは再レンダリングされない
export const UseCallbackComponent: React.FC = () => {
  console.log("rendered!");

  const [count, setCount] = useState<number>(0);
  const handleClick = useCallback(() => console.log("click"), []);

  return (
    <>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment count</button>
      <Child handleClick={handleClick} />
    </>
  )
}