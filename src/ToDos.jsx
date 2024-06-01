import { memo } from "react";

const ToDos = ({ todos, addTodo }) => {
  console.log("child render");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo + index}</p>;
      })}
      {/* here addTodo is used as useCallback function*/}
      <button onClick={addTodo}>Add Todo</button>
    </>
  );
};

export default memo(ToDos);



