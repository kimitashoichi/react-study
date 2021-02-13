import React, { useRef, useState } from "react";

// input要素の値をuseRefで取得し、stateを操作しているので描画はボタンクリック時のみ発生
export const UseRefInput: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [text, setText] = useState<string>("");
  const [hoge, setHoge] = useState<string>("");

  const handleClick = () => {
    if (inputRef.current) {
      console.log("inputRef" ,inputRef.current.value);
      setText(inputRef.current.value);
    }
  };

  console.log("UseRefInput rendered");

  return (
    <>
      <p>text: {text}</p>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Send!</button>
    </>
  )
}

// input要素の値が変更されるたびにstateを操作しているので入力のたびに描画されている
export const NotUseRefInput: React.FC = () => {
  const [text, setText] = useState<string>("");
  const [hoge, setHoge] = useState<string>("");

  const handleClick = () => {
    console.log("text", text);
  };

  console.log("NotUseRefInput rendered");

  return (
    <>
      <p>text: {text}</p>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <button onClick={handleClick}>Send!</button>
    </>
  )
}