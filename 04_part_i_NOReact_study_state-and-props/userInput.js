// see app.js of react project to see comparison.
const username = document.getElementById("username");
const display = document.getElementById("display");

const inputHandler=e=>{
    display.innerHTML = e.target.value;
}

username.addEventListener("input", inputHandler);