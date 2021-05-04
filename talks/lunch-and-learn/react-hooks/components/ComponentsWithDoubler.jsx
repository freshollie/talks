import React, { useState, useCallback } from "react";

const useDoubler = () => {
  const [number, setNumber] = useState(1);
  const double = useCallback(() => setNumber(number * 2), [setNumber, number]);

  return [number, double];
};

export const Component1 = () => {
  const [number, double] = useDoubler();
  return (
    <div>
      <button onClick={double}>Click me!</button>
      <h1>{number}</h1>
    </div>
  );
};

export const Component2 = () => {
  const [number, double] = useDoubler();
  return <button onClick={double}>Click me! ({number})</button>;
};
