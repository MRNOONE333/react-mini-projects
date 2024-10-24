const ToDo = ({task})=>{
    return(
        <>
            <div className="bg-white p-3 m-6 w-1/2">
                <p>{task.projectName}</p>
                <div className="border">
                    <p>{task.taskDescription}</p>
                </div>
            </div>
        </>
    )
}

export default ToDo;