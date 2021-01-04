import React from "react";
import BackspaceOutlinedIcon from "@material-ui/icons/BackspaceOutlined";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import RemoveRoundedIcon from "@material-ui/icons/RemoveRounded";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";

const buttons = [
  { id: 1, text: "AC", click: "AC" },
  { id: 2, text: "%", click: "%" },
  { id: 3, text: "÷", click: "/" },
  {
    id: 4,
    text: <BackspaceOutlinedIcon style={{ fontSize: 30, color: "orange", paddingTop: 5}} />,
    click: "backspace",
  },
  { id: 5, text: "7", click: "7" },
  { id: 6, text: "8", click: "8" },
  { id: 7, text: "9", click: "9" },
  {
    id: 8,
    text: (
      <CloseRoundedIcon
        style={{ fontSize: 40, color: "orange", paddingTop: 7 }}
      />
    ),
    click: "*",
  },
  { id: 9, text: "4", click: "4" },
  { id: 10, text: "5", click: "5" },
  { id: 11, text: "6", click: "6" },
  {
    id: 12,
    text: (
      <RemoveRoundedIcon
        style={{ fontSize: 40, color: "orange", paddingTop: 6 }}
      />
    ),
    click: "-",
  },
  { id: 13, text: "1", click: "1" },
  { id: 14, text: "2", click: "2" },
  { id: 15, text: "3", click: "3" },
  {
    id: 16,
    text: (
      <AddRoundedIcon
        style={{ fontSize: 40, color: "orange", paddingTop: 10 }}
      />
    ),
    click: "+",
  },
  { id: 17, text: ".", click: "." },
  { id: 18, text: "0", click: "0" },
  { id: 19, text: "=", click: "equals" },
];

export default buttons;

/*
 C % / <
 7 8 9 *
 4 5 6 -
 1 2 3 +  
 . 0 = =
*/
