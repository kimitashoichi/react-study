import React, { useState } from "react";

interface childProps {
  count: number;
}

// 通常の挙動 => 親コンポーネントが再レンダリングされるたびに、
// 子コンポーネントに変更がなくてもも再レンダリングされてしまう
export const Child: React.FC<childProps> = ({count}) => {
  console.log("render child");
  return (
    <p>Child: {count}</p>
  )
}

export const NotUseReactMemoComponent: React.FC = () => {
  console.log("render NotUseReactMemoComponent");
  const [count1, setCount1] = useState<number>(0);
  const [count2, setCount2] = useState<number>(0);

  return (
    <>
     <button onClick={() => setCount1(count1 + 1)}>Count1</button>
     <button onClick={() => setCount2(count2 + 1)}>Count2</button>
     <p>App: {count1}</p>
     <Child count={count2} />
    </>
  )
}


// React.Memoを使用した例

// memo関数に渡している引数はPropsInterfaceのデータ型を持ったもの
// const memoCompoentExample<PropsInterface> = React.memo(props => {
//   ...anyfunction
//   return (
//     ...any dom
//   )
// })


export const MemoChild: React.FC<childProps> = React.memo(props => {
  console.log("memo child component");
  return (
    <p>Child: {props.count}</p>
  )
})

// Childコンポーネントをメモ化しているので変更があった場合にのみ再レンダリングされる
export const UseReactMemoComponent: React.FC = () => {
  console.log("render UseReactMemoComponent");
  const [count1, setCount1] = useState<number>(0);
  const [count2, setCount2] = useState<number>(0);

  return (
    <>
     <button onClick={() => setCount1(count1 + 1)}>Count1</button>
     <button onClick={() => setCount2(count2 + 1)}>Count2</button>
     <p>App: {count1}</p>
     <MemoChild count={count2} />
    </>
  )
}