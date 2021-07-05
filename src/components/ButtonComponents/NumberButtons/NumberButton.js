import React from "react";

const NumberButton = (props) => {
  return (
    <button onClick = {() => {props.onClick(props.number)}} className = {String(props.number) === "0" ? "zero" : "num"}>
      {props.number}
    </button>
  );
};

export default NumberButton;