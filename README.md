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
# 🎯 useContext in React

## 📌 What is useContext?
`useContext` is a React Hook that allows you to access values from **React Context** directly, **without passing props manually** through every level of the component tree.  

It is mainly used for:
- Sharing **global state** (e.g., theme, authentication, language).  
- Avoiding **"prop drilling"** (passing props down multiple components).  

---

## ⚙️ Syntax
```jsx
const value = useContext(MyContext);


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


# 📦 Yarn vs npm  

Both **npm** (Node Package Manager) and **Yarn** are package managers for JavaScript.  
They help developers install, manage, and update libraries or dependencies in a project.  

---

## 🔹 npm (Node Package Manager)  
- Default package manager that comes with **Node.js**.  
- Installs packages from the **npm registry**.  
- Uses `package.json` to track dependencies.  

---

## 🔹 Yarn  
- Developed by **Facebook** in 2016.  
- Created as an alternative to npm with improvements in **speed, security, and reliability**.  
- Also uses the **npm registry**, but manages dependencies differently.  

---

## 🔎 Key Differences  

| Feature   | npm | Yarn |
|-----------|-----|------|
| **Speed** | Slower (installs sequentially in older versions). | Faster (installs packages in parallel). |
| **Lock File** | Uses `package-lock.json` to lock versions. | Uses `yarn.lock` to lock versions (deterministic installs). |
| **Offline Support** | Limited offline caching. | Strong offline support (installs from cache if available). |
| **Security** | Runs security audits with `npm audit`. | Also provides integrity checks, but relies on npm registry security. |
| **Commands** | `npm install <pkg>` | `yarn add <pkg>` |
| **Default with Node.js** | ✅ Yes, comes pre-installed with Node.js. | ❌ No, must be installed separately. |
| **Performance (modern versions)** | npm v7+ improved performance a lot. | Still considered slightly faster for large projects. |

---

## 🔑 Example Commands  

|            Task          |      npm      | Yarn |
|--------------------------|---------------|------|
| Install all dependencies | `npm install` | `yarn install` |
| Add a package | `npm install axios` | `yarn add axios` |
| Remove a package | `npm uninstall axios` | `yarn remove axios` |
| Install dev dependency | `npm install jest --save-dev` | `yarn add jest --dev` |
| Update a package | `npm update axios` | `yarn upgrade axios` |

---

## ✅ Summary  
- Both **npm** and **Yarn** do the same job: managing dependencies.  
- **Yarn** was originally faster and more reliable, but modern **npm (v7+) has caught up**.  
- Choosing between them often depends on **team preference** and **existing project setup**.  


# ⚛️ Why is React called React?

React is a JavaScript library developed by **Facebook** (now Meta) in 2013 for building user interfaces.  

The name **"React"** was chosen because:  

1. **Reactive Updates**  
   - React automatically *reacts* to changes in data or state.  
   - When the state of a component changes, React efficiently updates (re-renders) only the affected parts of the UI.  
   - This reactive nature makes UI updates smooth and fast.  

2. **Reactive Programming Principles**  
   - Inspired by reactive programming concepts where changes in one part of a system automatically propagate to other parts.  
   - React embraces this idea by re-rendering UI whenever its state or props change.  

3. **User Reactions**  
   - The library is focused on building **interactive** UIs that respond to user *reactions* (clicks, inputs, etc.) in real time.  

---

## ✅ In Simple Terms
React is called **React** because it is all about:
- **Reacting to data changes** (state, props).  
- **Reacting to user interactions** (events like clicks, typing, etc.).  
- **Reactively updating the UI** without reloading the whole page.  

---

# 🔄 Reconciliation in React

## What is Reconciliation?
Reconciliation is the **process React uses to update the DOM** when a component’s state or props change.  

React maintains a **Virtual DOM** (a lightweight copy of the Real DOM).  
When changes happen:
1. React updates the Virtual DOM first.
2. It then compares the new Virtual DOM with the previous one using a **diffing algorithm**.
3. Only the parts of the Real DOM that actually changed are updated.

This makes UI updates **fast and efficient**.

---

## ⚙️ How Reconciliation Works
1. **Render Phase**  
   - React calls the component’s `render()` function (or returns JSX).  
   - A new Virtual DOM tree is created.  

2. **Diffing Algorithm**  
   - React compares the new Virtual DOM with the old one (tree comparison).  
   - Uses heuristics:
     - Elements of different types → Replace entire subtree.
     - Elements of the same type → Update attributes and recurse deeper.
     - Lists → Uses `key` prop to identify items efficiently.

3. **Commit Phase**  
   - React applies the minimal changes to the Real DOM.  

---

## 🚀 Why Reconciliation is Important?
- **Performance Optimization** – avoids re-rendering the whole DOM.  
- **Smooth UI Updates** – updates only the necessary nodes.  
- **Scalability** – works efficiently even in large applications.  

---

## 📌 Example

```jsx
function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

```
# Debounce vs Throttle in ReactJS

Both **debounce** and **throttle** are techniques to control how frequently a function is executed, which helps in **performance optimization** when dealing with high-frequency events like `scroll`, `resize`, or `input`.

---

## 🔹 Debounce

**Definition:**  
Debounce ensures that a function is executed **only after a certain delay has passed** since the last time it was called.  
👉 Useful when you want to wait until the user stops doing something.

**Use Cases:**
- Search input (delay API calls until user stops typing)
- Form validations
- Auto-save after typing

### Example: Debounce Hook + Search Input

```tsx
import React, { useState, useEffect } from "react";

function useDebounce(value: string, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default function SearchInput() {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    if (debouncedQuery) {
      console.log("🔍 Fetching data for:", debouncedQuery);
      // Call API here
    }
  }, [debouncedQuery]);

  return (
    <input
      type="text"
      placeholder="Search..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="border p-2 rounded"
    />
  );
}
```
# Throttle in ReactJS

## 🔹 What is Throttling?

**Throttle** ensures that a function is executed **at most once in a given time interval**, even if it’s triggered multiple times during that interval.  

👉 In simple words:  
- If you call a function many times quickly, **throttle will only let it run once every X milliseconds**.

---

## 🔹 Why Use Throttle?

High-frequency events (like `scroll`, `resize`, `mousemove`, `drag`) can fire **hundreds of times per second**, causing performance issues.  
By throttling, we **limit execution frequency**, keeping the UI smooth.

---

## 🔹 Common Use Cases

- Tracking **scroll position**
- Implementing **infinite scroll**
- **Window resize** listener
- **Drag-and-drop** movement
- Button clicks that should not be spammed

---

## 🔹 Implementing Throttle Function

```tsx
function throttle(func: Function, delay: number) {
  let lastCall = 0;
  return (...args: any[]) => {
    const now = new Date().getTime();
    if (now - lastCall >= delay) {
      lastCall = now;
      func(...args);
    }
  };
}
```
# Debounce vs Throttle – Quick Revision

## 🔹 Debounce

- Executes a function **only after a delay** once the user stops triggering it.  
- Resets the timer if the event is triggered again within the delay.  
- 👉 Best for **user input actions** (search, form validation, auto-save).  

**Example Use Case:**  
Typing in a search bar – API is called **after user stops typing**.

---

## 🔹 Throttle

- Executes a function **at most once in a fixed interval**, no matter how many times it’s triggered.  
- Ensures execution at **regular intervals**.  
- 👉 Best for **continuous actions** (scroll, resize, drag, infinite scroll).  

**Example Use Case:**  
Tracking window scroll – handler runs **once every 500ms** instead of every pixel.

---

## 🔑 Side-by-Side Comparison

| Feature        | Debounce 🕒 | Throttle ⏱️ |
|----------------|-------------|-------------|
| Execution      | After user stops for X ms | At most once in X ms |
| Use Case       | Search input, auto-save, form validation | Scroll, resize, drag, infinite scroll |
| Behavior       | Waits for pause, then executes | Executes periodically while action continues |
| Example        | API call after typing | Update scroll position every 500ms |

---

## ✅ Quick Rule of Thumb

- Use **Debounce** when you want to **wait until user finishes typing/doing something**.  
- Use **Throttle** when you want to **limit execution rate during continuous actions**.  

🚀 Knowing when to use Debounce vs Throttle makes your React apps faster & smoother!
