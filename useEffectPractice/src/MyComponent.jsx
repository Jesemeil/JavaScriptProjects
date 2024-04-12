import React, { useState, useEffect } from "react";

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count:${count}`;
  });

  function AddCount() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <div className="A">
      <p>Count: {count}</p>
      <button onClick={AddCount}>Add</button>
    </div>
  );
}
export default MyComponent;
