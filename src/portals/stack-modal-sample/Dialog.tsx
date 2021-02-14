import React from "react";

type Props = {};

const Dialog: React.FC<Props> =  ({children}) => {
  return (
    <div className="dialog">
      { children }
      <style>{`
        .dialog {
          width: 12rem;
          background-color: #fff;
          padding: 1rem;
        }
      `}</style>
    </div>
  )
}

export default Dialog;