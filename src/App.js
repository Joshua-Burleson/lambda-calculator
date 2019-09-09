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
  const [runningMemory, updateMemory] = useState(0);
  const [currentDisplay, setDisplay] = useState(0);
  const [currentOperation, setOperation] = useState(false);

  //const isOperator = (key) => operators.map(oprtrObj =>  oprtrObj.value).includes(key.value);

  const registerNumberPress = (key) => {
    if(String(currentDisplay) === "0" && String(key) !== "."){
      updateMemory(String(key));
      return setDisplay(key);
    }
    setDisplay(String(currentDisplay).concat(key));
    updateMemory(String(runningMemory).concat(key));
  }

  const registerOperatorPress = (key) => {
    const {char, value} = key;
    
    if(char === '='){
      console.log(runningMemory);
      const currentTotal = String(eval(runningMemory));
      setDisplay(currentTotal);
      updateMemory(currentTotal);
    }else{
      setDisplay(char);
      updateMemory(String(runningMemory).concat(value));
    }

  }


  



//Return JSX
  return (
    <div className="container">
      <Logo />
      <div className="App">
        <Display currentDisplay = {currentDisplay} />
        <Specials specials = {specials} />
        <Numbers numbers = {numbers} onpress = {registerNumberPress}/>
        <Operators operators = {operators} onpress = {registerOperatorPress}/>
      </div>
    </div>
  );


}

export default App;
