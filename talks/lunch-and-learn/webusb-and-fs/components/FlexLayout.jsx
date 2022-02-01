import React from "react";

export default ({ children }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      width: "100%",
    }}
  >
    {children}
  </div>
);
