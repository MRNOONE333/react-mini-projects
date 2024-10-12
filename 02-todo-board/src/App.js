import './App.css';
import './index.css';
import Input from "./component/index";
import { useState } from 'react';
import Board from './component/board';

function App() {

  const [taskList, setTaskList] = useState([]);

  console.log(taskList)
  return (
    <>
    <div className="flex flex-col items-center justify-center">
    <h1>Todo-board</h1> 
    <Input taskList={taskList} setTaskList={setTaskList}/>
    </div>
    <div className="flex flex-col gap-4 sm:grid sm:grid-cols-3 px-4 sm:px-8 md:px-10 lg:px-12">
      {taskList.map((task,index)=>
        <Board
        key = {index}
        task ={task}
        index={index}
        taskList={taskList}
        setTaskList={setTaskList}
        />
      )}
    </div>
    </>
  );
}

export default App;