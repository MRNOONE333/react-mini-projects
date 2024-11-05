import { useState,useEffect } from "react";
import Edit from './Edit';
import Delete from './Delete';
const ToDo = ({task , index , taskList, setTaskList})=>{
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


    return(
        <>
            <div className="  bg-white p-3 m-6 w-1/2">
                <p className="font-semibold">{task.projectName}</p>
                    <p>{task.taskDescription}</p>

                    <div className="mt-4 flex flex-col ">
                        <div className="mb-5">
                        {/* flex flex-col justify-center items-center min-h-screen */}

                        <div className="font-semibold ml-10">
                        <span>{("0"+Math.floor((time/60000)%60)).slice(-2)}:</span> {/* divide by 60000 bcz of milliseconds */}
                        <span>{("0"+Math.floor((time/1000)%60)).slice(-2)}:</span>
                        <span>{("0"+Math.floor((time/10)%100)).slice(-2)}</span>
                        </div>

                        <div className="">
                          {/* <button onClick={()=>{setRunning(true)}}>Start</button>
                          <button onClick={()=>{setRunning(false)}}>Stop</button> */}

                          {running ? (
                              <button className="px-4 border border-black bg-gray-100 hover:bg-gray-300 text-black mr-2 rounded" onClick={()=>{setRunning(false)}}>Stop</button>
                          ):(
                            <button className="px-4 border border-black bg-gray-100 hover:bg-gray-300 text-black mr-2 rounded"  onClick={()=>{setRunning(true)}}>Start</button>
                            )
                          }
                          <button className="ml-2 px-4 border border-black bg-gray-100 hover:bg-gray-300 text-black mr-2 rounded" onClick={()=>{setTimer(0)}}>Reset</button>
                        </div>
                      
                        </div>

                        <div className="flex flex-row">
                        <Edit task={task} taskList={taskList} index={index} setTaskList= {setTaskList} />
                        <Delete  taskList={taskList} setTaskList={setTaskList} index={index}/>
                        </div>
                        
                    </div>

            </div>

 
        </>
    )
}

export default ToDo;