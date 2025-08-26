import React, { useState, useMemo } from "react";
// useMemo Purpose: To return a memoized value, useful for expensive calculations 
//that should only be re-computed when dependencies change.
const Memo = () => {
  const [myNum, setMyNum] = useState(0);
  const [show, setShow] = useState(false);

  const getValue = () => {
    return setMyNum(myNum + 1);
  };

  const countNumber = (num) => {
    console.log("🚀 ~ file: Memo.jsx ~ line 12 ~ countNumber ~ num", num);
    //this for loop i created to understand useMemo
    for (let i = 0; i <= 1000000000; i++) {}
    return num;
  };

  const checkData = useMemo(() => {
    return countNumber(myNum);
  }, [myNum]);

//useEffect cant provide same functionality becoz in this every time new object is created
// so it will re render every time but useMemo will store the value and only change when
// dependency changes

  return (
    <>
      <button onClick={getValue} style={{ backgroundColor: "red" }}>
        Counter
      </button>
      <p> My new number : {checkData} </p>
      <button onClick={() => setShow(!show)}>
        {show ? "You clicked me" : "Click me plz"}
      </button>
    </>
  );
};

export default Memo;
