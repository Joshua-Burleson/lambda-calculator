import React from "react";

const SpecialButton = (props) => {
  return (
    <button onClick = {() => props.onpress(props.symbol)}>
      {props.symbol}
    </button>
  );
};

export default SpecialButton;
