import React, { useReducer, useEffect } from "react";
import axious from "axios";

interface State {
  isLoading: boolean
  isError: string | null
  post: any
}

const initialState: State = {
  isLoading: true,
  isError: "",
  post: {}
}

interface Action {
  type: string
  payload: string
}

const detaFetcer = (state: State, action: Action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        isLoading: false,
        isError: null,
        post: action.payload
      }
    case "FETCH_ERROR":
      return {
        isLoading: false,
        isError: "読み込みに失敗しました",
        post: {}
      }
    default:
      return state
  }
}

const AppReducer: React.FC = () => {
  const [data, dispatch] = useReducer(detaFetcer, initialState);

  useEffect(() =>{
    axious.get("https://jsonplaceholder.typicode.com/posts/1")
    .then(res => {
      dispatch({type: "FETCH_SUCCESS", payload: res.data})
    })
    .catch(error => {
      dispatch({type: "FETCH_ERROR", payload: "something went wrong"})
    })
  }, []);

  return (
    <>
      <div>
        <h3>{data.isLoading ? "Loading..." : data.post.title}</h3>
        <p>{data.isError ? data.isError : null }</p>
      </div>
    </>
  )
}

export default AppReducer;