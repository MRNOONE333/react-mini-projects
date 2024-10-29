// to study props
    //child to parent prop change -should not be used frequently --- other approach discussed later- x. 
    // child ChangeName passes property parameter to app.js which is parent. 
// const ChangeName = ({property})=>{
//     const handlePropChange= ()=>{
//         property ("CHANGED-TEXT");
//     }
//     // or
//     // const ChangeName = (props)=>{    - -change
//     //     const handlePropChange= ()=>{  // same--
//     //         props.property ("CHANGED-TEXT");      - -change
//     return(
//         <>
//         <button onClick={handlePropChange}>
//             Hide My Name 
//         </button>
//         </>
//     )
// }
// export default ChangeName;


// --- other approach- x
//No extra property parameter created. 
// also i can use the variable state userName anywhere in this.
const ChangeName = ({username, setUsername})=>{
    const handlePropChange= ()=>{
        setUsername ("CHANGED-TEXT");
    }
    return(
        <>
        <button onClick={handlePropChange}>
            Hide My Name 
        </button>

        <p>the user anme is  - {username}</p>
        </>
    )
}
export default ChangeName;