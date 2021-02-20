import React, { useState, createContext } from "react";
import { useForm } from "react-hook-form";

import MapComponent from "./MapComponent";

// エリア検索フォームを実装する
interface IFormInput {
  area: string
}

const initSearchWord: IFormInput = {
  area: "",
}

export const SearchContext = createContext(initSearchWord);

const HeaderComponent: React.FC = () => {
  const {register, handleSubmit} = useForm<IFormInput>();
  const [data, setData] = useState<IFormInput>(initSearchWord);

  // このデータをMapコンポーネントに渡す
  const onSubmit = (data: IFormInput) => {
    console.log("form data", data);
    setData(data);
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" name="area" ref={register} />
        <input type="submit" />
      </form>
      
      <SearchContext.Provider value={data}>
        <MapComponent />
      </SearchContext.Provider>
    </>
  );
};

export default HeaderComponent;