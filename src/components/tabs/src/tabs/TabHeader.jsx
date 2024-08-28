import React from "react";

const TabHeader = ({ header, handleTabClick, selectedTabId }) => {
  return (
    <div className="flex">
      {header.map((item, _) => {
        return (
          <div
            key={item.id}
            className={item.id===selectedTabId ? "tabs active" : "tabs"}
            onClick={() => {
              handleTabClick(item.id, item.content);
            }}
          >
            {item.header}
          </div>
        );
      })}
    </div>
  );
};

export default TabHeader;
