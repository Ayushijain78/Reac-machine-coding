import React from "react";

const SuggestionsList = ({ handleClickList, listItem, upiId, gethighlightedText }) => {
  return (
    <div>
      <li className="list" onClick={handleClickList}>
        {gethighlightedText(listItem.suffix, upiId)}
      </li>
    </div>
  );
};

export default SuggestionsList;
