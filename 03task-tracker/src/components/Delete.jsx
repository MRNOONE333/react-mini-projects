const Delete = ({ index , taskList, setTaskList}) => {
    
    const onDelete = () => {
        // Filter out the task at the given index
        const updatedTaskList = taskList.filter((_, i) => i !== index);
        setTaskList(updatedTaskList);
    };
    
    return (
        <button
            onClick={()=>onDelete()}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
            Delete
        </button>
    );
};

export default Delete;