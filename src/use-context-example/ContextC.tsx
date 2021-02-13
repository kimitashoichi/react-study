import React, { useContext } from "react";
import { UserContext,  HobbyContext} from "./AppContext";

const ContextC: React.FC = () => {
  const user = useContext(UserContext);
  const hobby = useContext(HobbyContext);

  return (
    <p>{user.name}{user.age}才: 趣味: {hobby}</p>
  )
}

export default ContextC;