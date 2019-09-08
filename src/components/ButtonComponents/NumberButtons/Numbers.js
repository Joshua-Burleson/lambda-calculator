import React, {useState} from "react";
// import {numbers} from '../../../data.js'
import NumberButton from './NumberButton.js';

const Numbers = (props) => {
  // STEP 2 - add the imported data to state
  const [numbersState, setNumbersState] = useState(props.numbers);
  const numberButtonArray = props.numbers.map(num => <NumberButton number = {num} />);
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {numberButtonArray}
    </div>
  );
};


export default Numbers;