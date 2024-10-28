import { useState } from "react";
function App() {
  const [username,setUsername] = useState("");
  const handleInput= e=>{
    setUsername(e.target.value)
  }
  return (
    <>
    <h1></h1>
    <label for="username">Enter your name: </label>    
    <input id="username" type="text" placeholder="my name" onChange={handleInput}></input>
    <p>Hi there {username} </p>
    </>
  );
}
export default App;