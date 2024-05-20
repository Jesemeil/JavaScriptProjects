import React, { useState, useEffect, useRef } from "react";

function MyComponent() {
  const inputRef = useRef(null);

  useEffect(() => {
    console.log("COMPONENT RENDERED");
    console.log(inputRef);
  });

  function handleClickChange() {
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "yellow";
  }

  return (
    <div>
      <button onClick={handleClickChange}>Click me!</button>
      <br />
      <input ref={inputRef} />
    </div>
  );
}
export default MyComponent;
