import React, {useState} from "react";
import "./App.css";
import {numbers, operators, specials} from './data.js';
import Logo from './components/DisplayComponents/Logo.js';
import Display from './components/DisplayComponents/Display.js';
import Specials from './components/ButtonComponents/SpecialButtons/Specials.js';
import Numbers from './components/ButtonComponents/NumberButtons/Numbers.js';
import Operators from './components/ButtonComponents/OperatorButtons/Operators.js';

// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining components

function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props
  const [currentValue, setCurrentValue] = useState(0);
  const [currentDisplay, setDisplay] = useState(0);
  const [currentOperation, setOperation] = useState(false);

  const appMath = {
    "+" : num => Number(currentValue) + Number(num),
    "-" : num => Number(currentValue) - Number(num),
    "*" : num => Number(currentValue) * Number(num),
    "/" : num => Number(currentValue) / Number(num),
    "=" : () => setDisplay(currentValue),
    isOperator: val => operators.find(operator => val.value === operator.value) !== undefined,

  }



  const registerNormalPress = (val) => {
    //If there is a current operation and the current key val is not an operator
    //use the curent operation on the new value and the current value and set the currentValue to the result

    if(currentOperation && !appMath.isOperator(val)){
      setCurrentValue(appMath[currentOperation](val));
      setOperation(false);
      setDisplay(val);
    }

    //Check if the current key val is an operator
    else if(appMath.isOperator(val)){
      //If equals, present current value
      if(val.value === '='){
        appMath[val.value]();
        return;
      }

      //Check if the current display is an operator, if so use the operator on the current value and itself (i.e. 2+2)
     { 
      const testVal = {char: currentDisplay} 
      console.log(currentDisplay, testVal, operators.find(operator => testVal.char === operator.value) !== undefined);
    }
      appMath.isOperator({value: currentDisplay}) ? setCurrentValue(appMath[val.value](currentValue)) 
                                                  : setCurrentValue(Number(currentDisplay)); //if not, set the current value to the display on the screen
      setOperation(val.value); //set the currentOperation to the key val value
      setDisplay(val.value); //display the operation
        //Future release note to self: display new value if currentValue updated first case of ternary.
    }

    else{
      //if there is no current operation and 
      const newChar = String(currentDisplay).concat(String(val));
      console.log(newChar, Number(newChar));
  // Issues to resolve, do math with decimals < 1, handle presses of . with no pre-decimal digit in play
      val === '.' ? setDisplay(String(currentDisplay).concat(String(val))) 
                  : setDisplay(Number(String(currentDisplay).concat(String(val))));
    }

  }




  return (
    <div className="container">
      <Logo />
      <div className="App">
        <Display currentDisplay = {currentDisplay} />
        <Specials specials = {specials} />
        <Numbers numbers = {numbers} onpress = {registerNormalPress}/>
        <Operators operators = {operators} onpress = {registerNormalPress}/>
      </div>
    </div>
  );


}

export default App;
