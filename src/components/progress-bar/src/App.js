import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import ProgressBar from "./progressbar/ProgressBar";

function App() {
  const [value, setValue] = useState(0);
  let timer = useRef(null);
  useEffect(() => {
    timer.current = setInterval(() => {
      setValue((prev) => {
        if (prev >= 100) {
          clearInterval(timer.current);
          return 100;
        }
        return prev + 1;
      });
    }, 100);
    return () => {
      clearInterval(timer.current);
    };
  }, []);
  return (
    <div className="App">
      <h1>Progress Bar</h1>
      <ProgressBar progressValue={value} />
    </div>
  );
}

export default App;
