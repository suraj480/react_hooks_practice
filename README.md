In the project directory, you can run:

### `npm start`

# UseEffect
The useEffect hook lets you perform side effects in function component
In useEffect we can do 3 task in single function we have return keyword with this we can manage componentUnmount
1. without dependecy array
   useEffect(()=>{

}) 
->if you will not pass any dependency than use effect will call whenever component will re-render It will be called whenever a state change happens in a project
**********
2. with dependency array 
useEffect(()=>{

},[])
->it will be called when component mount 
**********
3. with dependency array + dependent item
useEffect(()=>{

},[dependency])
->it will be called when component mount as well when dependency will have some change
**********
4. component unMount
useEffect(()=>{
return()=>{
    // write here whatever you want to just before unmounting
}
},[])
->it will be called just before unmounting
**********

# useMemo
it returns memoized value
It is used to increase the performance of our react application

Memoization is an optimization feature in react  which, when used in the right place, incereased the performance of the program

import React, { useState, useMemo } from "react";

const Memo = () => {
  const [myNum, setMyNum] = useState(0);
  const [show, setShow] = useState(false);

  const getValue = () => {
    setMyNum(myNum + 1);
  };

  const countNumber = (num) => {
    console.log("Expensive function is running with value:", num);
    // Simulating an expensive calculation
    for (let i = 0; i <= 1000000000; i++) {}
    return num;
  };

  // Memoized value
  const checkData = useMemo(() => {
    return countNumber(myNum);
  }, [myNum]);

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


# useCallback
it returns memoized function

# 📌 useCallback Example in React

This example demonstrates how to use **`useCallback`** to memoize a function so that it does not get recreated on every render.  
It is especially useful when passing functions as props to child components that rely on reference equality (`React.memo`).

---

## 🔹 Code Example

```jsx
import { useCallback, useState } from "react";
import Todos from "./ToDos";

// Purpose: To return a memoized callback, useful for passing stable functions
// to components that rely on reference equality to prevent unnecessary renders.

const CallBack = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  // Normal function (recreated on every render)
  const increment = () => {
    setCount(count + 1);
  };

  // Memoized function using useCallback
  const addTodo = useCallback(() => {
    setTodos((prev) => [...prev, "new Entry"]);
  }, [todos]);

  // Without useCallback (causes re-renders of child if not memoized)
  // const addTodo = () => {
  //   setTodos((prev) => [...prev, "new Entry"]);
  // };

  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

export default CallBack;


# memo
Memoize whole components.

# UseRef

What is useRef and why it is used?
The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.

# Custom hook
A custom hook in React is a JavaScript function whose name starts with use and that may call other hooks. Custom hooks are a great way to encapsulate and reuse stateful logic between components.

