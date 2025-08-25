import "./App.css";
import React from "react";
import UseEffect from "./UseEffect";
import Memo from "./Memo";

import CallBack from "./CallBack";
import UseREF from "./UseREF";
import UseContextPractice from "./UseContextPractice";
import UseReducerPractice from "./UseReducerPractice";
import UseMemoPractice from "./UseMemoPractice";
import UseCallbackPractice from "./UseCallbackPractice";
import { UseRefPractice } from "./UseRefPractice";
import useFetch from "./useFetch";
import NameDown from "./NameDown";
import SearchInput from "./useDebounce";
function App() {
  return (
    <div className="App">
      {/* <NameDown /> */}
      {/* <CallBack /> */}
      {/* <Memo/> */}
      {/* <UseREF/> */}
      <SearchInput />
    </div>
  );
}

export default App;
