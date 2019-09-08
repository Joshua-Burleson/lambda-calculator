import React from "react";

const SpecialButton = (props) => {
  return (
    <button onClick = {() => {console.log(props)}}>
      {props.symbol}
    </button>
  );
};

export default SpecialButton;
