import React, { useState } from "react";
import "./styles.css";
const Accordian = ({ data }) => {
  const [toggle, setToggle] = useState(null);
  const handleToggle = (id) => {
    setToggle((item) => (item === id ? null : id));
  };

  return (
    <div>
      {data.map((items, index) => {
        const { header, description } = items;
        return (
          <div className="box" key={index}>
            <div className="header flex" onClick={() => handleToggle(index)}>
              <span> {header}</span>
              {index===toggle? <span className="arrow">▽</span>:<span className="arrow">▵</span>}
            </div>
            <div
              className="description"
              style={{ display: index === toggle ? "block" : "none" }}
            >
              {description}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordian;
