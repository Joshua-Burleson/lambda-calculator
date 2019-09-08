import React from "react";

const OperatorButton = (props) => {

  return (
    <button onClick = {() => {props.onClick(props)}}>
      {props.char}
    </button>
  );
};

export default OperatorButton;