import React, { useState } from "react";

const ReadFolderExample = () => {
  const [directory, setDirectory] = useState();
  const [files, setFiles] = useState([]);

  const updateFiles = async (rootHandle) => {
    const directoryEntries = [];
    for await (const entry of rootHandle.values()) {
      directoryEntries.push(entry);
    }
    setFiles(directoryEntries);
  };

  return (
    <div>
      <button
        onClick={async () => {
          const folder = await window.showDirectoryPicker({ id: 'my-test' });
          setDirectory(folder);
          await updateFiles(folder);
        }}
      >
        Select folder
      </button>
      {directory && <h3>Files (of {directory.name}): </h3>}
      <div>
        {files.map((file) => (
          <div
            onClick={() => {
              void directory
                ?.removeEntry(file.name)
                .then(() => updateFiles(directory));
            }}
          >
           {file.name} -  Remove
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReadFolderExample;
