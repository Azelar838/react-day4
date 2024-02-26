import './App.css';
import { useState } from "react";


function App() {
  const [counterValue,setCounterValue]=useState(0)
  function increaseCounterValue(){
    setCounterValue(counterValue + 1);
  }
  function decreaseCounterValue(){
    if(counterValue>0)
    {
      setCounterValue(counterValue - 1);
     }else{
     alert("can't go lower than zero");
    }
  }
  function resetCounterValue(){
    setCounterValue(0);
  }
  return (
    <div className="App">
     <h1>Counter App</h1>
      <h1>{counterValue}</h1>
      <div className='buttonsContainer'>
          <button onClick={() => increaseCounterValue()}>+</button>
          <button onClick={() => decreaseCounterValue()}>-</button>
          <button onClick={() => resetCounterValue()}>0</button>
      </div>
    </div>
  );
}

export default App;
