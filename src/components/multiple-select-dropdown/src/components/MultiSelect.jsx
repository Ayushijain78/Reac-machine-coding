import React, { useEffect, useState, useRef } from "react";

const MultiSelect = ({ userData, setSearchTerm }) => {
  const [userName, setuserName] = useState("");
  const [selectedNames, setSelectedname] = useState([]);
  const [highlightedIndex, setHighlightedIndex] = useState(0); // To track the highlighted item

  const handleUserNameChange = (event) => {
    const { value } = event.target;
    setuserName(value);
    setSearchTerm(value);
    setHighlightedIndex(0); // Reset highlighted index when search term changes
  };

  const handleListItemClick = (image, name) => {
    const isDuplicate = selectedNames.some(
      (item) => item.name === name && item.image === image
    );

    if (!isDuplicate) {
      setSelectedname((prevSelected) => [...prevSelected, { name, image }]);
    }
  };

  const handleKeyDown = (event) => {
    if (userData.length > 0) {
      if (event.key === "ArrowDown") {
        setHighlightedIndex((prevIndex) =>
          prevIndex === userData.length - 1 ? 0 : prevIndex + 1
        );
      } else if (event.key === "ArrowUp") {
        setHighlightedIndex((prevIndex) =>
          prevIndex === 0 ? userData.length - 1 : prevIndex - 1
        );
      } else if (event.key === "Enter") {
        const selectedUser = userData[highlightedIndex];
        setSearchTerm("");
        handleListItemClick(selectedUser.image, selectedUser.firstName);
      }
    }
  };

  const handleRemoveSelectedItem = (image, name) => {
    const removedData = selectedNames.filter((item) => {
      return item.name !== name && item.image !== image;
    });
    setSelectedname(removedData);
  };

  return (
    <div>
      <div className="search-result">
        {selectedNames.length ? (
          <RenderSelectedItem
            selectedNames={selectedNames}
            handleRemoveSelectedItem={handleRemoveSelectedItem}
          />
        ) : (
          ""
        )}
        <input
          className="name-input"
          type="search"
          placeholder="Enter Pokemon"
          value={userName}
          onChange={handleUserNameChange}
          onKeyDown={handleKeyDown}
        />
      </div>
      {userData.length > 0 && userName.length > 0 ? (
        <div className="suggestion-list">
          <RenderList
            userData={userData}
            handleListItemClick={handleListItemClick}
            highlightedIndex={highlightedIndex} // Pass highlighted index
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default MultiSelect;

export const RenderList = React.memo(
  ({ userData, handleListItemClick, highlightedIndex }) => {
    const listItemRefs = useRef([]);

    useEffect(() => {
      if (listItemRefs.current[highlightedIndex]) {
        listItemRefs.current[highlightedIndex].scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }
    }, [highlightedIndex]);
    return userData.map((user, index) => {
      return (
        <div
          className={`list-item ${
            index === highlightedIndex ? "highlighted" : ""
          }`}
          key={index}
          ref={(el) => (listItemRefs.current[index] = el)}
          onClick={() => handleListItemClick(user.image, user.firstName)}
        >
          <img src={user.image} alt="" className="img" />
          {user.firstName}
        </div>
      );
    });
  }
);

export const RenderSelectedItem = ({
  selectedNames,
  handleRemoveSelectedItem,
}) => {
  return (
    <div className="selected-container">
      {selectedNames.map((list, index) => {
        return (
          <div key={index} className="selected-item">
            <img src={list.image} alt="image" className="img" />
            {list.name}
            <span
              className="cross"
              onClick={() => handleRemoveSelectedItem(list.image, list.name)}
            >
              ❌
            </span>
          </div>
        );
      })}
    </div>
  );
};
