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
```jsx
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

```
# memo
Memoize whole components.

# UseRef
```
What is useRef and why it is used?
The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.
```
### Avoiding Unnecessary Renders with `useRef`

In React, we often use **state** to store values that persist across renders. However, updating state always triggers a re-render of the component.  
Sometimes, this can cause **unnecessary re-renders** and impact performance.

That’s where **refs** come in.

- A **ref** is very similar to state in that it persists between renders.
- The key difference is that **changing a ref does not trigger a re-render** of your component.
- This makes `useRef` useful when you want to store values or references without causing re-renders.

✅ Instead of using `useState` when you only need to keep track of a value (but don’t need a re-render), you can use 
`useRef`.
```
## But biggest use case of useRef is that people going to use ref for is too reference elements inside of your HTML and this is actually so popular that each element 
inside of your document has a ref attribute and you can set that to any ref you want 
```
```jsx
import { useRef } from 'react';

export default function UseREF() {
  let ref = useRef(0);

  function handleClick() {
    ref.current = ref.current + 1;
    alert('You clicked ' + ref.current + ' times!');
  }

  return (
    <button onClick={handleClick}>
      Click me!
    </button>
  );
}


```
# Custom hook
A custom hook in React is a JavaScript function whose name starts with use and that may call other hooks. Custom hooks are a great way to encapsulate and reuse stateful logic between components.



# 🌳 Virtual DOM vs Real DOM  

React uses the **Virtual DOM** to improve performance and optimize UI updates.  

## 📌 What is the Real DOM?  
- The **Real DOM (Document Object Model)** is the actual representation of the UI in the browser.  
- It directly reflects changes in HTML, CSS, and JavaScript.  
- Manipulating the Real DOM is **slow**, because updating even a small part of the UI may cause the entire tree structure to re-render.  

## 📌 What is the Virtual DOM?  
- The **Virtual DOM** is a lightweight, in-memory representation (copy) of the Real DOM.  
- When a component’s state or props change, React updates the Virtual DOM first.  
- React then compares (diffs) the new Virtual DOM with the previous version to identify changes.  
- Only the parts that changed are updated in the Real DOM → making updates **fast and efficient**.  

---

## 🔎 Difference Between Real DOM and Virtual DOM  

|     Feature    |             Real DOM                     |                  Virtual DOM                    |
|----------------|------------------------------------------|-------------------------------------------------|
| **Definition** | The actual DOM structure in the browser. | A lightweight copy of the DOM stored in memory. |
| **Update Speed** | Slow (entire UI may re-render). | Fast (only the changed nodes are updated). |
| **Re-rendering** | Whole UI can be re-rendered. | Only components with updated state/props are re-rendered. |
| **Performance** | Less efficient for frequent changes. | Highly efficient and optimized. |
| **Manipulation** | Directly manipulated with JS (`document.querySelector`, `innerHTML`, etc.). | Managed by React using `setState`, hooks, and props. |
| **Abstraction** | Direct representation of UI. | Abstraction layer between React and the Real DOM. |

---

## 🔑 Key Takeaway  
- **Real DOM** → Direct, but **slow** for frequent updates.  
- **Virtual DOM** → Optimized, **fast**, and helps React efficiently update only what has changed.  

⚡ This is one of the main reasons why React applications perform better for dynamic and interactive UIs.  
