let  Board = ({task,index,taskList,setTaskList,})=>{
    let handleDelete = ()=>{
        // let removeIndex = taskList.indexOf(task);
        // taskList.splice(removeIndex,1);
        // setTaskList((currenntTasks=>currenntTasks.filter(todo=>index===removeIndex)))
                
        // Use filter to create a new array without the task at the given index
            const updatedTaskList = taskList.filter((task, i) => i !== index);
        // Update the state with the new task list
            setTaskList(updatedTaskList);
    }


 return(
    <>
        <div className="max-w-md rounded-xl flex flex-col items-center justify-center border text-center text-lg pt-3 pb-4 px-4 md:px-6">
            <p>{task}</p>
            <button 
            className="bg-red-500 text-white rounded py- px-2"
            onClick={handleDelete}>
                Delete
            </button>
        </div>
    </>
 );   
}

export default Board;