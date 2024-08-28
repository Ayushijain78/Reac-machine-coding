import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import SuggestionsList from "./SuggestionsList";
import { ImageURL, gethighlightedText } from "./config";
const AutoComplete = ({ data }) => {
  const [upiId, setUpiId] = useState("");
  const [suggestionList, setSuggestionList] = useState([]);
  const [predictionValue, setPredictionValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const getSuggetionList = (dataKey) => {
    const newList = data.filter((item) =>
      item.suffix.toLowerCase().includes(dataKey.toLowerCase())
    );
    if (newList.length > 0) setSuggestionList(newList);
  };
  const handleUpiChange = (event) => {
    const {
      target: { value },
    } = event;

    setUpiId(value);

    if (!value.includes("@")) {
      setPredictionValue(value || "");
      return;
    }
    const [currentUserVpa, currentBankName] = value.split("@");
    const userBanNameReg = new RegExp(`${currentBankName}`);
    const matcheBankName = data.filter((bankName) => {
      return userBanNameReg.test(bankName.suffix);
    });

    let currentPredictedBankName = matcheBankName[0]?.suffix || "";
    if (currentBankName && !matcheBankName.length) {
      currentPredictedBankName = "";
    }
    getSuggetionList(currentPredictedBankName);
    setPredictionValue(`${currentUserVpa}@${currentPredictedBankName}`);
  };


  const handlesuggestioClick = (event) => {
    const {
      target: { innerText },
    } = event;
    setUpiId(upiId + innerText);
    setSuggestionList([]);
  };
  const closeDropDown = () => {
    setIsOpen(false);
  };
  const handkeyPress = (event) => {
    const { keyCode = -1, key, code } = event;
    const isRightArrowClicked =
      keyCode === 39 || code.toLowerCase() === "arrowRight";
    if (isRightArrowClicked) {
      setSuggestionList([]);
      setIsOpen(false);
      setUpiId(predictionValue);
    }
  };
  useEffect(() => {
    const handleKickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropDown();
      }
    };
    document.addEventListener("mousedown", handleKickOutside);
    return () => {
      document.removeEventListener("mousedown", handleKickOutside);
    };
  }, []);
  return (
    <div className="box">
      <img className="image" src={ImageURL} alt="UPI Payments" />
      <div className="suggestionBox">
        <input
          className="prediction-input"
          type="text"
          value={predictionValue}
          onChange={handleUpiChange}
        />
        <input
          onClick={() => setIsOpen(!isOpen)}
          type="text"
          pattern={".+@.+"}
          placeholder="Enter UPI Id"
          autoCapitalize="off"
          spellCheck="off"
          autoComplete="off"
          className="input"
          value={upiId}
          onChange={handleUpiChange}
          onKeyDown={handkeyPress}
        />
        {suggestionList.length > 0 || upiId.length > 0 ? (
          <ul
            ref={dropdownRef}
            className={suggestionList.length > 0 ? "suggestionList" : ""}
          >
            {suggestionList.map((listItem, index) => {
              return (
                <SuggestionsList
                  key={index}
                  handleClickList={handlesuggestioClick}
                  listItem={listItem}
                  upiId={upiId}
                  gethighlightedText={gethighlightedText}
                />
              );
            })}
          </ul>
        ) : null}
        <button className="button">Pay Now</button>
      </div>
    </div>
  );
};

export default AutoComplete;
