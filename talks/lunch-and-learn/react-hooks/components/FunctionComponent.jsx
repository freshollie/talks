import React, { useState } from "react";

const DoubleApp = () => {
  const [number, setNumber] = useState(1);

  return (
    <div style={{ margin: "100px" }}>
      <button onClick={() => setNumber(number * 2)}>Click me!</button>
      <h1>{number}</h1>
    </div>
  );
};

export default DoubleApp;
