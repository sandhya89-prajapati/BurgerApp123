import React, {useState} from 'react';
import './App.css';



const App = () => {
  const [num, setNum] = useState(0);

  const incNum = () =>{
    setNum(num + 1);
  };

  const dcrNum = () =>{
    setNum(num - 1);
  };
  return (
    <div className="main_class">
      <div className="wrapper">
        <h1> {} </h1>
        <div className="btn_div">
          <button onClick={incNum}>Increment</button>
          <button onClick={dcrNum}>Decrement</button>
        </div>
        </div>
      
    </div>
  );
}

export default App;
