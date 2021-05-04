import React, { useState, useEffect } from "react";

const useCount = () => {
  const [number, setNumber] = useState(1);

  useEffect(() => {
    const timeout = setInterval(() => {
      setNumber((n) => n + 1);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [setNumber]);

  return number;
};

export const CountComponent1 = () => {
  const number = useCount();
  return <h1>{number}</h1>;
};

export const CountComponent2 = () => {
  const number = useCount();
  return <button>Some button {number}</button>;
};
