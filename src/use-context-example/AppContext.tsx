import React, { createContext, useState, } from "react";
import Context from "./ContextA";
import Button from "@material-ui/core/Button";

interface User {
  name: string
  age: string
}

const initUser: User = {
  name: "",
  age: ""
}

const changeUser: User = {
  name: "ユーザー名",
  age: "17"
}

export const UserContext = createContext(initUser);
export const HobbyContext = createContext("");

const AppContext: React.FC = () => {
  const [user, setUser] = useState<User>(changeUser)
  const [hobby, setHobby] = useState<string>("キャンプ");

  const inCompoentUser: User = {
    name: "useEffect",
    age: "30"
  }

  function changeContext(): void {
    setHobby(hobby.slice(1));
    setUser(inCompoentUser);
  }

  return (
    <div>
      <UserContext.Provider value={user}>
        <HobbyContext.Provider value={hobby}>
          <Button variant="outlined" onClick={() => changeContext()}>コンテクストの変更</Button>
          <Context />
        </HobbyContext.Provider>
      </UserContext.Provider>
    </div>
  )
}

export default AppContext;