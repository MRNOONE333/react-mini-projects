import { useState } from "react";
import ChangeName from "./ChangeName";
function App() {
  const [username,setUsername] = useState("");
  const handleInput= e=>{
    setUsername(e.target.value)
  }
  return (
    <>
    <label for="username">Enter your name: </label>    
    <input id="username" type="text" placeholder="my name" onChange={handleInput}></input>
    <p>Hi there {username} hope you are doing great</p>
    {/* <ChangeName property = {newUsername=>setUsername(newUsername)}/> */}
      {/* or */}
    {/* <ChangeName property = {Username=>setUsername(Username)}/> */}

    <ChangeName username={username} setUsername={setUsername}/>
    </>
  );
}
export default App;