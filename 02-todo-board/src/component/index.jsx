import { useState } from "react";

let Input =({taskList, setTaskList})=>{

    const[input,setInput] = useState("");
    console.log(input);

    let handleAddTask=(e)=>{
        e.preventDefault();
        setTaskList([...taskList,input]); // adds the new input into the previous array
        setInput(""); // to remove previously typed charachers in input box.
    }
    
    return(
        <>
        <form action="">
            <input 
            className="border rounded py-2.5"
            type="text"
            placeholder="Add task" 
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            />
            
            <button
            onClick={handleAddTask}
            className="bg-violet-400 text-white rounded px-2.5 py-2.5 rounded-lg font-semibold hover:opacity-70">
            
                Add
            </button>

        </form>     
        </>
    );
}

export default Input;