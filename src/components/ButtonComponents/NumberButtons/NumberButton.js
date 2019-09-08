import React from "react";

const NumberButton = (props) => {
  return (
    <button onClick = {() => {props.onClick(props.number)}}>
      {props.number}
    </button>
  );
};

export default NumberButton;