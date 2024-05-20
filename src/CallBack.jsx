import { useCallback, useState } from "react";
import Todos from './ToDos';
//Purpose: To return a memoized callback, useful for passing stable functions
//to components that rely on reference equality to prevent unnecessary renders.

const CallBack = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount(count + 1);
  };

  const addTodo = useCallback(() => {
    setTodos((prev) => [...prev, `new Entry`]);
  }, [todos]);

  // const addTodo = () => {
  //   setTodos((prev) => [...prev, `new Entry`]);
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
