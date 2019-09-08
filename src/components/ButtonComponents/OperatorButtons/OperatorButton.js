import React from "react";

const OperatorButton = (props) => {
  return (
    <button onClick = {() => props.val}>
      {props.char}
    </button>
  );
};

export default OperatorButton;