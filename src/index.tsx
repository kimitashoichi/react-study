import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LoadingSample from "./loading-sample/Loading";
import AppContext from "./use-context-example/AppContext";
import UseReducerA from "./use-reducer-example/ReducerA";
import UseReducerB from "./use-reducer-example/ReducerB";
import AppReducer from "./use-reducer-example/AppReducer";
import {UseRefInput, NotUseRefInput} from "./use-ref-example/UseRefSample";

// useCallback Sample
import { NotUseCallbackComponent, UseCallbackComponent } from "./use-memo-callback-example/use-callback/UseCallbackExample1";

// React.memo() Sample
import { NotUseReactMemoComponent, UseReactMemoComponent } from "./use-memo-callback-example/react-memo/MemoExample1";

// useMemo Sample
import { NotUseMemo, UseMemoComponent } from "./use-memo-callback-example/use-memo/UseMemoExample1";

// useMemo Sample (component render)
import { UseMemoRenderComponent } from "./use-memo-callback-example/use-memo/UseMemoExample2";

ReactDOM.render(
  <React.StrictMode>
    <UseMemoRenderComponent />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
