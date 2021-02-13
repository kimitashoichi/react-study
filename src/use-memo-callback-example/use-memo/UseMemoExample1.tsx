import React, { useMemo, useState } from "react";

// useMemo => 値の不要な再計算をスキップすることができる
// ex) useMemo(() => 値計算のロジック, [依存配列])
// 依存配列 = 値の計算に必要な要素
// ex) const result = useMemo(() => count * 2, [count])
// この場合 count が更新されない限りは再計算がスキップされる


// useMemoを使用しない場合
export const NotUseMemo: React.FC = () => {
  const [count1, setCount1] = useState<number>(0);
  const [count2, setCount2] = useState<number>(0);

  const loop = (value: number) => {
    let i = 0;
    while (i < 1000000000) {
      i++
    }
    return value * 2
  }

  // count2の更新の時だけloopが走って処理が重たくなるが
  // doubleCountはレンダリングするたびに呼ばれてしまうため
  // count1が更新された時でもdoubleCountが呼ばれて処理が走ってしまう
  const doubleCount = loop(count2);

  return (
    <>
    <h2>Increment count1</h2>
    <p>Counter: {count1}</p>
    <button onClick={() => setCount1(count1 + 1)}>Increment count1</button>

    <h2>Increment count2</h2>
    <p>
      Counter: {count2}, {doubleCount}
    </p>
    <button onClick={() => setCount2(count2 + 1)}>Increment count2</button>
  </>
  )
}

// useMemoを利用した場合
export const UseMemoComponent: React.FC = () => {
  const [count1, setCount1] = useState<number>(0);
  const [count2, setCount2] = useState<number>(0);

  const loop = (value: number) => {
    let i = 0;
    while (i < 1000000000) {
      i++
    }
    return value * 2
  }

  // count2の更新の時だけloopが走って処理が重たくなるが
  // doubleCountはレンダリングするたびに呼ばれてしまうため
  // count1が更新された時でもdoubleCountが呼ばれて処理が走ってしまう
  const doubleCount = useMemo(() => loop(count2), [count2]);

  return (
    <>
    <h2>Increment count1</h2>
    <p>Counter: {count1}</p>
    <button onClick={() => setCount1(count1 + 1)}>Increment count1</button>

    <h2>Increment count2</h2>
    <p>
      Counter: {count2}, {doubleCount}
    </p>
    <button onClick={() => setCount2(count2 + 1)}>Increment count2</button>
  </>
  )
}