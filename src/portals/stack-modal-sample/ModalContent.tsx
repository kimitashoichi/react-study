import React, { useContext } from 'react';

import { Context } from './ModalReducer';
import Dialog from './Dialog';

type Props = {
  type: string;
}

const ModalContent: React.FC<Props> = ({ type }) => {
  const { dispatch } = useContext(Context);

  switch (type) {
    case "dialog.unshift":
      return (
        <Dialog>
          <p>前に通常のダイアログを追加できるダイアログ</p>
          <div>
            <button
              onClick={() => dispatch({type: "UNSHIFT", modal: "dialog"})}>
              unshift
            </button>
            <button
              onClick={() => dispatch({type: "SHIFT"})}>
              close
            </button>
          </div>
        </Dialog>
      )
    case "error.empty":
      return (
        <Dialog>
          <p>エラー: 何も入力されていません</p>
          <p>type: {type}</p>
          <div>
            <button
              onClick={() => dispatch({type: "SHIFT"})}>
              close
            </button>
          </div>
        </Dialog>
      )
    case "dialog":
    default:
      return (
        <Dialog>
          <p>エラー: 何も入力されていません</p>
          <p>type: {type}</p>
          <div>
            <button
              onClick={() => dispatch({type: "SHIFT"})}>
              close
            </button>
          </div>
        </Dialog>
      )
  }
}

export default ModalContent;