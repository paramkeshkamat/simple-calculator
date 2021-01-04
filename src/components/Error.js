import React from "react";
import ErrorOutlineRoundedIcon from "@material-ui/icons/ErrorOutlineRounded";

const Error = () => {
  return (
    <div className="Error">
      <p>
        <ErrorOutlineRoundedIcon />
        Invalid Expression
      </p>
    </div>
  );
};

export default Error;
