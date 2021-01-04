import React from "react";
import Error from "./Error";

const DisplayArea = ({ currentOperation, previousOperation, error }) => {
  return (
    <div className="DisplayArea">
      <h4>{previousOperation}</h4>
      <h2>{currentOperation}</h2>
      {error && <Error />}
    </div>
  );
};

export default DisplayArea;
