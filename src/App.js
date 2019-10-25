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
  const [positive, setPositivity] = useState(true);

  const isOperator = (key) => operators.map(oprtrObj =>  oprtrObj.char).includes(key);
  

  const registerNumberPress = (key) => {
    console.log(runningMemory)
    if(String(currentDisplay) === "0" && String(key) !== "."){
      updateMemory(String(key));
      return setDisplay(key);
    };

    if(isOperator(currentDisplay) || [...currentDisplay].includes("%")){
      updateMemory(String(runningMemory).concat(key));
      return setDisplay(key);
    }

    setDisplay(String(currentDisplay).concat(key));
    updateMemory(String(runningMemory).concat(key));
  }


  const registerOperatorPress = (key) => {

    const {char, value} = key;
    
    if(char === '='){
      console.log(`${runningMemory} = ${String(eval(runningMemory))}`);
      const currentTotal = String(eval(runningMemory));
      setDisplay(currentTotal);
      updateMemory(currentTotal);
      setPositivity(true);
    }
    
    else{
      setDisplay(char);
      updateMemory(String(runningMemory).concat(value));
      console.log(runningMemory)
    }

  }


  const registerSpecialPress = (key) => {
    switch(key){
      case 'C':  
      [setDisplay, updateMemory].forEach(setValue => setValue('0'));
      setPositivity(true);
      break;

      case '%': 
      console.log(String(Math.abs(eval(runningMemory)) * 0.1).concat('!'));
      updateMemory(".".concat(String(Math.abs(eval(runningMemory))).concat('*')));
      setDisplay(String(runningMemory).concat('%'));
      setPositivity(true);
      break;

      case '+/-': console.log('+/-', currentDisplay);
      if(isOperator(currentDisplay)) break;
      if(positive){
        String(currentDisplay) !== '0' ? setDisplay(' -'.concat(currentDisplay)) : setDisplay(' -0.');
        String(currentDisplay) !== '0' ? updateMemory(' -'.concat(String(currentDisplay))) : updateMemory ('-0.');
        setPositivity(false);
      }
      else{
        const absVal = Math.abs(currentDisplay);
        setDisplay(absVal);
        updateMemory(String(absVal));
        setPositivity(true);
      }
      break

      default: 
      console.log('Something went wrong with special button press');
      throw ReferenceError;
    }
  }
  



//Return JSX
  return (
    <div className="container">
      <Logo />
      <div className="App">
        <Display currentDisplay = {currentDisplay} />
        <div className="button-wrapper">
          <div className = "left-content">
            <Specials specials = {specials} onpress = {registerSpecialPress} />
            <Numbers numbers = {numbers} onpress = {registerNumberPress}/>
          </div>
          
          <Operators operators = {operators} onpress = {registerOperatorPress}/>
        </div>
      </div>
    </div>
  );


}

export default App;
