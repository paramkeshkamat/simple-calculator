import React from "react";

const Button = ({ buttons, onButtonClick }) => {
  const handleClick = () => {
    onButtonClick(buttons.click);
  };
  return (
    <button onClick={handleClick} className="btn">
      {buttons.text}
    </button>
  );
};

export default Button;
