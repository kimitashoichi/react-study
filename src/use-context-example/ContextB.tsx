import React, {useContext} from "react";
import ContextC from "./ContextC";
import { UserContext,  HobbyContext} from "./AppContext";

const ContextB: React.FC = () => {
  const hobby = useContext(HobbyContext);
  return (
    <>
      <h1>{hobby}</h1>
      <ContextC />
    </>
  )
}

export default ContextB;