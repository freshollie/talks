import React, { useRef, useEffect, useState } from "react";

export default () => {
  const divRef = useRef();
  const [width, setWidth] = useState();

  useEffect(() => {
    setWidth(divRef.current.clientWidth);
  }, [divRef]);

  const time = new Date().toTimeString().split(" ")[0];
  return (
    <div>
      <h1 ref={divRef}>Hello lunch and learn! It's {time}</h1>
      {width && <h2>^ That's {width}px wide</h2>}
    </div>
  );
};
