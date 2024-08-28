import "./App.css";
import { useEffect, useState } from "react";
function BoxComponent({ index, handleClickBox, fillColor }) {
  return (
    <button
      className="box"
      style={{ background: `${fillColor ? "yellow" : ""} ` }}
      onClick={() => handleClickBox(index)}
    />
  );
}
function App() {
  const [clickedBox, setClickedBox] = useState([]);
  const [deActivatingBox, setDeActivatingBox] = useState(false);
  let config = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1],
  ];
  useEffect(() => {
    if (deActivatingBox) {
      const intervalId = setInterval(() => {
        setClickedBox((prev) => {
          if (prev.length === 0) {
            clearInterval(intervalId);
            setDeActivatingBox(false);
            return prev;
          }
          return prev.slice(0, -1); // Remove the last element
        });
      }, 1000);

      return () => clearInterval(intervalId); // Cleanup on unmount
    }
  }, [deActivatingBox]);

  const handleClickBox = (index) => {
    if (!clickedBox.includes(index)) {
      setClickedBox((prevClickedBox) => {
        const newClickedBox = [...prevClickedBox, index];

        let totalActiveBoxes = config
          .flat(1)
          .filter(Boolean).length;

        if (totalActiveBoxes === newClickedBox.length) {
          setDeActivatingBox(true);
        }
        return newClickedBox;
      });
    }
  };

  return (
    <div className="App">
      <h1>C Shape</h1>
      <div className="grid">
        {config.flat(1).map((item, index) => {
          return item ? (
            <BoxComponent
              key={index}
              item={item}
              index={index}
              fillColor={clickedBox.includes(index)}
              handleClickBox={handleClickBox}
            />
          ) : (
            <div className="box empty"></div>
          );
        })}
      </div>
    </div>
  );
}

export default App;


