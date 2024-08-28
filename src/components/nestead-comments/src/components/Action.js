import React from "react";

const Action = ({ text, onClick, style }) => {
  return <button onClick={onClick} className={`btn ${style}`}>{text}</button>;
};

export default Action;
