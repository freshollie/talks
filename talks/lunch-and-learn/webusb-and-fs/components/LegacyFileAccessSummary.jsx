import React, { useState } from "react";

const LegacyFileAccessSummary = () => {
  const [files, setFiles] = useState([]);
  
  return (
    <div>
      <div>
        {files.map((f) => (
          <div>{f.name}</div>
        ))}
      </div>
      <input
        type="file"
        multiple
        onChange={(event) => {
          setFiles(Array.from(event.target.files));
        }}
      />
    </div>
  );
};

export default LegacyFileAccessSummary;
