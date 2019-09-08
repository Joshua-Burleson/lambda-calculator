import React, {useState} from "react";
// import {specials} from '../../../data.js';
import SpecialButton from './SpecialButton.js';

//import any components needed

//Import your array data to from the provided data file
const [specialState, setSpecialState] = useState(props.specials);
const specialsButtonsArray = props.specials.map(special => <SpecialButton symbol = {special} />);

const Specials = () => {
  // STEP 2 - add the imported data to state

  return (
    <div>
      {specialsButtonsArray}
    </div>
  );
};

export default Specials;