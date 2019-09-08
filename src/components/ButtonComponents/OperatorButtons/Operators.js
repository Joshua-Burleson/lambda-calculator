import React, {useState} from "react";
// import {operators} from '../../../data.js';
import OperatorButton from './OperatorButton.js';
//import any components needed

//Import your array data to from the provided data file

const Operators = (props) => {
  // STEP 2 - add the imported data to state
  const [operatorData, setOperatorData] = useState(props.operators);

  const operatorButtonArray = props.operators.map(op => <OperatorButton char = {op.char} onClick = {props.onpress} />);
  console.log(operatorButtonArray);
  return (
    <div>
       {operatorButtonArray}
    </div>
  );
};

export default Operators;