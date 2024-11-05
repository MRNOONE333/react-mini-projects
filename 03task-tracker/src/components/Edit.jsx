import { useEffect, useState } from "react";

const Edit= ({ task , index , taskList, setTaskList}) => {
    
    const [editModel, setEditModel] = useState(false);
    const [projectName, setProjectName] = useState("");
    const [taskDescription, setTaskDescription] = useState("");


    useEffect(()=>{
        setProjectName(task.projectName);
        setTaskDescription(task.taskDescription);
    },[task, editModel]);

    const handleInput = (e) => {
        const { name, value } = e.target;

        // Correct condition to update respective state
        if (name === "projectName") setProjectName(value);
        if (name === "taskDescription") setTaskDescription(value);
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        
        // Update taskList by mapping through it and updating the specified task
        const updatedTaskList = taskList.map((item, i) => 
            i === index ? { projectName, taskDescription } : item
        );
    
        setTaskList(updatedTaskList);
        setEditModel(false); // Close the modal after updating
        setProjectName(""); // Clear the input fields
        setTaskDescription("");
    };
    

    return (
        <>
        <button
            onClick={()=>setEditModel(true)}
            className="bg-gray-500 hover:bg-gray-700 text-white px-4 py-2 mr-2 rounded "
        >
            Edit
        </button>
        {editModel ? (
            <>
                <div className="flex items-center justify-center overflow-x-hidden overflow-y-auto fixed inset-0 z-100">
                        <div className="w-9/12 bg-white rounded-lg shadow-md relative flex flex-col">
                            <div className="flex flex-row p-5 justify-between border-b border-slate-200 rounded-t">
                                <h3 className="font-semibold text-3xl">
                                    Edit Task
                                </h3>

                                <button
                                    className="px-1 text-grey-400 text-3xl leading-none font-semibold float-right block"
                                    onClick={() => setEditModel(false)}
                                >
                                    X
                                </button>
                            </div>
                            <form className="p-6">
                                <div>
                                    <label
                                        className="tracking-wide uppercase text-gray-700 text-xs font-semibold mb-2 block"
                                        htmlFor="project-name"
                                    >
                                        Project Name
                                    </label>
                                    <input
                                        name="projectName"
                                        value={projectName} // Correct value
                                        onChange={handleInput} // Correct handler
                                        className="w-full bg-gray-200 text-gray-700 px-4 py-3 rounded leading-tight border border-gray-200 focus:outline-none focus:bg-white"
                                        id="project-name"
                                        type="text"
                                        placeholder="Project name"
                                        required
                                    />
                                </div>

                                <div>
                                    <label
                                        className="tracking-wide uppercase text-gray-700 text-xs font-semibold mb-2 mt-2 block"
                                        htmlFor="task-description"
                                    >
                                        Task Description
                                    </label>

                                    <textarea
                                        name="taskDescription"
                                        value={taskDescription} // Correct value
                                        onChange={handleInput} // Correct handler
                                        className="w-full bg-gray-200 text-gray-700 px-4 py-3 rounded leading-tight border border-gray-200 focus:outline-none focus:bg-white"
                                        id="task-description"
                                        rows="2"
                                        placeholder="Task Description"
                                    />
                                </div>
                            </form>
                            <div className="flex justify-end p-6 border-t border-slate-200">
                                <button
                                    className="bg-blue-500 text-white font-semibold relative rounded hover:opacity-70 py-3 px-6"
                                    onClick={handleUpdate}
                                >
                                    Edit Task
                                </button>
                            </div>
                        </div>
                    </div>
            </>
        ):null}
        </>
    );
};

export default Edit;
