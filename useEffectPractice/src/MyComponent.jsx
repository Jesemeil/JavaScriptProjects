import React, { useState, useEffect } from "react";

function MyComponent() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");

  useEffect(() => {
    document.title = `Count:${count} ${color}`;
  }, [count, color]);

  function AddCount() {
    setCount((prevCount) => prevCount + 1);
  }

  function SubtractCount() {
    setCount((prevCount) => prevCount - 1);
  }

  function ChangeColour() {
    setColor((prevColor) => (prevColor === "green" ? "red" : "green"));
  }
  return (
    <div className="A">
      <p style={{ color: color }}>Count: {count}</p>
      <button onClick={AddCount}>Add</button>
      <button onClick={SubtractCount}>Subtract</button>
      <br />
      <button onClick={ChangeColour}>Change Colour</button>
    </div>
  );
}
export default MyComponent;
