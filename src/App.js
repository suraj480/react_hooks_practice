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
function App() {
  const { data, loading, error } = useFetch('https://api.example.com/data');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div className="App">
        <pre>{JSON.stringify(data, null, 2)}</pre>
      {/* <UseEffect /> */}
      {/* <Memo/> */}
     {/* <CallBack/> */}
     {/* <UseREF/> */}
     {/* useContext was having some error */}
   {/* <UseContextPractice/> */}
   {/* <UseReducerPractice/> */}
   <UseMemoPractice/>
   {/* <UseCallbackPractice/> */}
   {/* <UseRefPractice/> */}
    </div>
  );
}

export default App;
