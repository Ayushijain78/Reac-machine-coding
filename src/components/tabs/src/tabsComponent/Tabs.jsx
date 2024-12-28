import React, { act, useState } from "react";

const Tab = ({ header, onTabClick, isActive }) => {
  return (
    <button
      className={`${isActive ? "tabs active" : "tabs"}`}
      onClick={onTabClick}
    >
      {header}
    </button>
  );
};
const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].header);
  const handleTabClick = (label) => {
    setActiveTab(label);
  };
  return (
    <div className="tab-container">
      <div className="tab-header">
        {tabs.map((tab) => {
          return (
            <Tab
              key={tab.header}
              header={tab.header}
              onTabClick={() => handleTabClick(tab.header)}
              isActive={activeTab === tab.header}
            />
          );
        })}
      </div>
      <div className="tab-content">
        {tabs.map((tab) => {
          return activeTab === tab.header && <div>{tab.content}</div>
        })}
      </div>
    </div>
  );
};

export default Tabs;
