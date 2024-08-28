import React, { useState } from "react";

const ProgressBar = ({ progressValue }) => {
  console.log(progressValue);
  return (
    <div className="progress-container">
      <div
        className="fill-color"
        style={{ width: `${progressValue}%`, padding: "10px" }}
      ></div>
      <div
        className="progress-text"
        style={{ color: `${progressValue > 40 ? "white" : "black"}` }}
      >
        {progressValue}%
      </div>
    </div>
  );
};

export default ProgressBar;
