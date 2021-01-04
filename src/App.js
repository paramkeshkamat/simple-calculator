import React, { useState } from "react";
import DisplayArea from "./components/DisplayArea";
import Button from "./components/Button";
import buttons from "./buttons";
let operation = "";
let previous = "";

const App = () => {
  const [currentOperation, setCurrentOperation] = useState("");
  const [prevOperation, setPrevOperation] = useState("");
  const [error, setError] = useState(false);

  const onButtonClick = (text) => {
    setError(false);
    if (text === "backspace") {
      operation = operation.substring(0, operation.length - 1);
    } else if (text === "AC") {
      previous = operation;
      operation = "";
    } else if (text === "equals") {
      previous = operation;
      try {
        // eslint-disable-next-line no-eval
        operation = eval(operation);
        var precision = (operation + "").split(".")[1]
        if(precision) {
          precision = precision.length;
        }
        if (precision > 4) {
          operation = operation.toFixed(4);
        } 
        operation = operation.toString();
      } catch (error) {
        operation = "";
        setError(true);
      }
    } else {
      operation += text;
    }
    setPrevOperation(previous);
    setCurrentOperation(operation);
  };

  return (
    <div className="App">
      <DisplayArea
        currentOperation={currentOperation}
        previousOperation={prevOperation}
        error={error}
      />
      <div className="btns">
        {buttons.map((btn) => {
          return (
            <Button key={btn.id} buttons={btn} onButtonClick={onButtonClick} />
          );
        })}
      </div>
    </div>
  );
};

export default App;
