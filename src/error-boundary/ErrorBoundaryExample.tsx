import React from "react";
import ReactDOM from "react-dom";
import { ErrorBoundary } from "react-error-boundary";

export const ErrorExample: React.FC = () => {
  const random = Math.random();
  if (random <= 0.7) {
    throw new Error("Error");
  }
  return (
    <div>OK!</div>
  )
}


export const errorUi: React.FC<any> = ({error, resetErrorBoundary}) => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={() => resetErrorBoundary()}>Please Try again.</button>
    </div>
  )
}
