import { useEffect, useRef, useState } from "react";

export default function UseREF() {
  let renderCount = useRef(0);
  let ref = useRef(0);
 
  const [name, setName] = useState("");
  // const [renderCount, setRenderCount] = useState(0);

  function handleClick() {
    ref.current = ref.current + 1;
    alert("You clicked " + ref.current + " times!");
  }
  //By this we  can see infinite Loop calling is happening
  // useEffect(() => {
  // setRenderCount((prev) => prev + 1);
  // });
  useEffect(() => {
   renderCount.current = renderCount.current + 1;
  });
  return (
    <>
      <button onClick={handleClick}>Click me!</button>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <div>I rendered {renderCount.current}</div>
    </>
  );
}
