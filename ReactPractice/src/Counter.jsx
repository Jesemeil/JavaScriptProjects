import React, { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);

  const handleDecrementChange = () => {
    setCount((c) => c - 1);
    setCount((c) => c - 1);
    setCount((c) => c - 1);
  };

  const handleResetChange = () => {
    setCount(0);
  };

  const handleIncrementChange = () => {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  };

  return (
    <div>
      <p>Counter: {count}</p>
      <button onClick={handleDecrementChange}>Decrement</button>
      <button onClick={handleResetChange}>Reset</button>
      <button onClick={handleIncrementChange}>Increment</button>
    </div>
  );
}
export default Counter;
