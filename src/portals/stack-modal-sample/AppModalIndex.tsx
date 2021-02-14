import React, { useContext, useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

import Modal from './Modal';
import { Context } from './ModalReducer';

const Page: NextPage = () => {
  const {state, dispatch} = useContext(Context);
  const [modalName, setModalName] = useState("");

  const onClickHandler = () => {
    if (!modalName) {
      dispatch({ type: "UNSHIFT", modal: "error.empty" });
      return;
    }
    dispatch({ type: "PUSH", modal: modalName });
  }

  return (
    <>
      <Head>
        <title>Portal Modal Example</title>
      </Head>
      <h1>Portal Modal Example</h1>
      <ul>
        <li>dialog.unshift: 前に割り込みダイアログをだす</li>
        <li>未入力: 何も入力しなければエラー</li>
        <li>その他: 通常のダイアログ</li>
      </ul>
      <div>
        <input
          type="text"
          value={modalName}
          onChange={(e) => setModalName(e.target.value)} />
      </div>
      <div>
        <button onClick={onClickHandler}>add modal</button>
        <pre>{JSON.stringify(state.modals)}</pre>
      </div>
      <Modal />
    </>
  )
}

export default Page;