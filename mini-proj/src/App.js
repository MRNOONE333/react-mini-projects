import './App.css';
import {useEffect, useState} from "react";

function App() {
  const [time ,setTimer] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect (()=>{
    let interval;
    if (running){
      interval = setInterval(() => {
        setTimer ((prevTime)=>prevTime+10);
      }, 10);
    }else if(! running){
      clearInterval(interval);
    }

    return ()=>clearInterval(interval);
  },[running]);

  return (
    <div className="App">
      <h1>Stop watch</h1>
      <div>
      <span>{("0"+Math.floor((time/6000)%60)).slice(-2)}:</span> {/* divide by 6000 bcz of milliseconds */}
      <span>{("0"+Math.floor((time/1000)%60)).slice(-2)}:</span>
      <span>{("0"+Math.floor((time/10)%100)).slice(-2)}</span>
      </div>

      <div className=''>
        {/* <button onClick={()=>{setRunning(true)}}>Start</button>
        <button onClick={()=>{setRunning(false)}}>Stop</button> */}
        
        {running ? (
            <button onClick={()=>{setRunning(false)}}>Stop</button>
        ):(
          <button onClick={()=>{setRunning(true)}}>Start</button>
          )
        }
        <button onClick={()=>{setTimer(0)}}>Reset</button>
      </div>
    </div>
  );
}

export default App;
