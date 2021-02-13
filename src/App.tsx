import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

interface CheckType<T> {
  init: T
}

type Initital = number | string;

function getInitalStateCheck (key: string, initial: Initital) {
  if (localStorage.getItem(key)) {
    return localStorage.getItem(key);
  }
  return initial;
}

function App() {
  const [count, setCount] = useState<number>(
    localStorage.getItem("count") ? Number(localStorage.getItem("count")) : 0);
  const [title, setTitle] = useState<string>("");
  
  useEffect(() => {
    setTitle(`you clicked ${count} times.`)
  })
  function setLocalStorage(): void {
    setCount(count + 1);
    let item = String(count + 1);
    localStorage.setItem("count", item);
  }

  return (
    <div className="App">
      <h1>{title}</h1>
      <button
        onClick={() => setLocalStorage()}>Click!</button>
    </div>
  );
}

export default App;
