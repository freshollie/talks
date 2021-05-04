import React, { createContext, useContext } from "react";

const MyContext = createContext();

const Component = () => {
  const data = useContext(MyContext);
  return <h1>{data}</h1>;
};

const App = () => {
  return (
    <MyContext.Provider value="Bulb!">
      <Component />
    </MyContext.Provider>
  );
};

export default App;
