import React, { useState } from "react";
import CounterDisplay from "./CounterDisplay";
import { useCounter } from "./useCounter";

// カスタムフックとは
// 名前がuseで始まる関数,その関数の中でreact hooks が使用できるもの
// ルール
// 1. カスタムフックは"use"から始まる名前にすること
// => その関数が内部でHookを読んでいることを明示的に示すため
// 2. カスタムフックの内の処理は共通化されるが、stateは共通化されない
// => 呼び出し場所ごとにstateは異なる

const AppComponent: React.FC = () => {
  const {count, decrement, increment} = useCounter(0);
  return (
    <div className="App">
      <CounterDisplay
        count={count}
        increment={increment}
        decrement={decrement}/>
    </div>
  )
}

export default AppComponent;