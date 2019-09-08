import React, {useState} from "react";
import {operators} from '../../../data.js';
import OperatorButton from './OperatorButton.js';
//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [operatorData, setOperatorData] = useState(operators);

  const operatorButtonArray = operators.map(op => <OperatorButton char = {op.char} func = {op.value} />);
  console.log(operatorButtonArray);
  return (
    <div>
       {operatorButtonArray}
    </div>
  );
};

export default Operators;