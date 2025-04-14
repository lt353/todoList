import React, {useState} from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }
  function decrease() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>Counter</h1>
      <div>
        <h2>{count}</h2>
        <button onClick={decrease}>-</button>
        <button onClick={increase}>+</button>
        <br />
        <button className="reset" onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
