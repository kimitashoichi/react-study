import { createContext, Dispatch } from "react";

export type StateType = {
  modals: string[];
}

export const initialState: StateType = {
  modals: []
}

const init  = {

}

export const Context = createContext<{
  state: StateType
  dispatch: Dispatch<any>
}>({
  state: {modals: [""]},
  dispatch: (aciton: any) => null,
})

export const reducer = (state: StateType, aciton: any): StateType => {
  switch (aciton.type) {
    case "PUSH":{
      const modals = [...state.modals];
      modals.push(aciton.payload);
      return { modals };
    }
    case "SHIFT":{
      const modals = [...state.modals];
      modals.shift();
      return { modals };
    }
    case "UNSHIFT":{
      const modals = [...state.modals];
      modals.unshift(aciton.payload);
      return { modals };
    }
    default:
      throw new Error("未定義のアクションです");
  }
}