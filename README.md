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

# useCallback
it returns memoized function

# memo
Memoize whole components.

# UseRef

What is useRef and why it is used?
The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.

# Custom hook
A custom hook in React is a JavaScript function whose name starts with use and that may call other hooks. Custom hooks are a great way to encapsulate and reuse stateful logic between components.

