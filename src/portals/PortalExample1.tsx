import React, { useState } from "react";
import ReactDOM from "react-dom";

export const Root: React.FC = () => {
  return (
    <>
      {/* <div id="dialog" />にDialogコンポーネントがレンダリングできるようになる */}
      <div id="dialog" />
      <div className="App">
        <Menu />
      </div>
    </>
  );
}

export const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleClick = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  return (
    <div className="menu">
      <button onClick={handleClick}>show dialog</button>
      {isOpen ? <Dialog /> : null}
    </div>
  );
}

export const Dialog: React.FC = () => {
  return ReactDOM.createPortal(
    <h2>This is Dialog!</h2>,
    // ２階層上のRootコンポーネントのid属性にdialogの値をもつDOMに
    // <h2>This is Dialog!</h2>を表示させている
    // 表示される場所は親コンポーネントのDOMツリー外
    // それを可能にする仕組みがPortals
    document.getElementById("dialog") as Element
  );
};
