"use strict";
// EXERCISE 1: HANDLE AN API PROMISE:

const searchForm = document.querySelector('#searchForm');
// const paragraph = document.querySelector("p");
let container = document.querySelector(".container");


searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let input = document.querySelector("#searchBar").value
    fetch(`https://api.github.com/users/${input}/events/public`)
        .then(res => res.json())
        .then(data => {
            // console.log(data[0])
            console.log(paragraphElement(data))
        })

})
function paragraphElement(data) {
    let aychOne = document.createElement("h1")
    aychOne.innerHTML = `The user, "${document.querySelector("#searchBar").value}" last updated on ${new Date (data[0].created_at)}`
    container.appendChild(aychOne)
}
// function paragraphElement(data) {
//     let paragraph = document.createElement("p")
//     paragraph.innerHTML = `The user, "${document.querySelector("#searchBar").value}" last updated on ${data[0].created_at}`
//     container.appendChild(paragraph)
// }

// CREATED AN EVENT LISTENER THAT WILL PUT THE INPUT FIELD DATA INTO A PARAGRAPH IN ITS OWN DIV, THE INPUT BEING THE SELECTED INFORMTION FROM THE FETCHED DATA THAT WAS JSON'D, GETTING THE FIRST PARENT OF THAT INFORMATION, "[0]" TO THEN FIND THE LATEST PUBLIC PUSH WITH "CREATED_AT", I ALSO ADDED A "NEW DATE" METHOD AND CHANGED FROM A PARAGRAPH TO AN H1 ELEMENT
// ===============





