import React, { useContext, useRef, useState, useEffect, ElementRef } from 'react';
import { createPortal } from 'react-dom';
import { Context } from './ModalReducer';
import ModalContent from './ModalContent';

const Modal: React.FC = () => {
  const ref = useRef<Element>();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector("#__next") as Element;
    setMounted(true);
  }, [])

  const {state} = useContext(Context);
  const initElement = document.createElement("label")

  return (
  <div>Modal Content</div> )
  //   mounted ? createPortal(
  //     <>
  //       {state.modals[0] && (
  //         <div className="modal">
  //           <ModalContent type={state.modals[0]} />
  //           <style>{`
  //               .modal {
  //                 position: fixed;
  //                 top: 50vh;
  //                 left: 0;
  //                 right: 0;
  //                 bottom: 0;
  //                 background-color: rgba(0, 0, 0, 0.5);
  //                 display: flex;
  //                 justify-content: center;
  //                 align-items: center;
  //               }
  //             `}</style>
  //         </div>
  //       )}
  //     </>,
  //     // ここ怪しい
  //     ref.current !== undefined ? ref.current : initElement
  //   )
  //   : null
  // )
}

export default Modal;