import Edit from './Edit';
import Delete from './Delete';
const ToDo = ({task , index , taskList, setTaskList})=>{
    return(
        <>
            <div className="  bg-white p-3 m-6 w-1/2">
                <p className="font-semibold">{task.projectName}</p>
                    <p>{task.taskDescription}</p>

                    <div className="mt-4 flex">
                        <Edit task={task} taskList={taskList} index={index} setTaskList= {setTaskList} />
                        <Delete  taskList={taskList} setTaskList={setTaskList} index={index}/>
                    </div>

            </div>

 
        </>
    )
}

export default ToDo;