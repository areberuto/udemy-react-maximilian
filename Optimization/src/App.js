import React, { useState, useCallback } from "react";
import Button from "./components/UI/Button/Button";
import "./App.css";
import DemoOutput from "./components/DemoOutput";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowTogle] = useState(false);
  const toggleParagraph = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prevState) => !prevState);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    console.log("yup");
    setAllowTogle(true);
    setShowParagraph(true);
  };

  console.log("App function being evaluated");
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph}></DemoOutput>
      <Button onClick={allowToggleHandler}>Allow toggle</Button>
      <Button className="lebuton" onClick={toggleParagraph}>
        Click click click
      </Button>
    </div>
  );
}

export default App;
