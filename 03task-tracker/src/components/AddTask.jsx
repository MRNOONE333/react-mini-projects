import { useState } from "react";

const AddTask = ()=>{
    const [addModel, setAddModel] = useState(false);
    return(
        <>
        <button className="bg-blue-500 text-white font-semibold 
        rounded hover:opacity-70 pl-2 pr-2 mx-2"
        type="button"
        onClick={()=>setAddModel(true)}>
            +New
        </button>

        {/* conditional render */}
        {addModel?
        (<>
        <div className="flex items-center justify-center 
        overflow-x-hidden overflow-y-auto fixed inset-0 z-100 ">
            <div className="w-9/12 bg-white rounded-lg 
            shadow-md relative flex flex-col">
            <div className=" flex flex-row 
                p-5 justify-between
                border-b border-slate-200 rounded-t ">
                
                <h3 className="font-semibold text-3xl ">New Task Added</h3>
                
                <button className="px-1 text-grey-400 text-3xl 
                leading-none font-semibold float-right block"
                onClick={()=>setAddModel(true)}
                >X</button>

            </div>
            <form className="p-6">
                <div>
                    <label className="tracking-wide uppercase text-gray-700
                    text-xs font-semibold mb-2 block"
                    htmlFor="project-name">
                        Project Name
                    </label>
                    <input 
                    className="w-full bg-gray-200 text-gray-700 
                    px-4 py-3 rounded leading-tight
                    border border-gray-200 focus:outline-none focus:bg-white "
                    id ="project-name"
                    type="text"
                    placeholder="Project name" required/>
                </div>
                
                <div>
                    <label className="tracking-wide uppercase text-gray-700
                    text-xs font-semibold mb-2 mt-2 block"
                    htmlFor="task-description">

                        Task Description
                    </label>

                    <textarea 
                    className="w-full bg-gray-200 text-gray-700 
                    px-4 py-3 rounded leading-tight
                    border border-gray-200 focus:outline-none focus:bg-white" 
                    id="task-description"
                    rows="2"
                    placeholder="Task Description" 
                    />

                </div>

            </form>
            <div className="flex justify-end p-6 border-t border-slate-200">
                <button className="bg-blue-500 text-white font-semibold 
                relative rounded hover:opacity-70 py-3 px-6">
            {/*  */}
                    Add Task
                </button>
            </div>
            </div>
        </div>
        </>)
        :
        null}
        </>
    )
}

export default AddTask;