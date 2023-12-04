import randomGreeting from "./greeting-logic.js";


document.querySelector('#form').addEventListener('submit', (e) => {
    e.preventDefault()
    document.querySelector("#pname").innerText = `${randomGreeting()} ${e.target[0].value}`




});