import React, { useState } from "react";

const FileExplorer = ({ fileData }) => {
  const [toggleArrow, setToggleArrow] = useState(false);
  const handleToggle = () => {
    setToggleArrow((prev) => !prev);
  };
  return (
    <div>
      <div className={`${fileData.isFolder ? "folder" : "file"}`}>
        {fileData.name}
        {fileData.isFolder && (
          <span className="arrow" onClick={handleToggle}>
            {toggleArrow ? "🔼" : "🔽"}
          </span>
        )}
      </div>
      <div
        className="right"
        style={{ display: `${toggleArrow ? "none" : "block"}` }}
      >
        {fileData.items.map((file, index) => {
          return <FileExplorer fileData={file} key={index} />;
        })}
      </div>
    </div>
  );
};

export default FileExplorer;
