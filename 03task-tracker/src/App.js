import { useState } from 'react';
import './App.css';
import AddTask from './components/AddTask';
import ToDo from './components/ToDo';

function App() {
  const [taskList , setTaskList] = useState([]);
  return (
    <div className="app">
      <>
        <h1 className="text-2xl font-bold py-4 pl-6">Task Tracker</h1>
        <p className="text-xl pl-6">Hi There</p>
        <div className="flex flex-row items-center">
          <p className="text-xl pl-6">Click</p>
          <AddTask taskList={taskList} setTaskList={setTaskList} />
          <p className="text-xl">to add new button</p>
        </div>
        <h2 className='font-bold text-2xl mx-6 mt-3 w-max bg-gray-300'>  To Do:</h2>
        {taskList.map((task,i) =>
        <>
        <ToDo key={i} task={task} index={i} taskList={taskList} setTaskList={setTaskList} />
        </>
        )}

      </>
    </div>
  );
}

export default App;