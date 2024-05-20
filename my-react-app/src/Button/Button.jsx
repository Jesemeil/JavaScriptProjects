function Button() {
  let count = 0;
  const handleClick1 = (name) => {
    if (count < 3) {
      count++;
      console.log(`${name} clicked me ${count} time/s`);
    } else {
      console.log(`${name} Stop clicking me `);
    }
  };

  const handleClick2 = (e) => (e.target.textContent = `Ouch!!`);

  return (
    <>
      <button onClick={() => handleClick1("AJCode")}>Click me 😊</button>
      <button onClick={(e) => handleClick2(e)}>Click me2 😊</button>
    </>
  );
}
export default Button;
