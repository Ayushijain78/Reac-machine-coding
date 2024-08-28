import React from "react";

const TabPanel = ({ content, image }) => {
  return (
    <div className="tab-content">
      <img src={image} alt={image} className="image"/>
      <div className="pt-4">{content}</div>
    </div>
  );
};

export default TabPanel;
