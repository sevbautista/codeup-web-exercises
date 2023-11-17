// CREATING AN ELEMENT
const myNewP = document.createElement("p");
myNewP.innerText = "I'm a new paragraph.";
myNewP.id = "myNewP"
myNewP.classList.add("fs-2", 'fw-bold', "text-center")

// ADDING THE ELEMENT TO OUR DOM.(IF YOU DON'T APPEND IT, IT IS NOT VISIBLE IN THE BROWSER)
document.querySelector('#newContent').appendChild(myNewP);


const myOtherP = document.createElement("p");
myOtherP.innerText = "I'm a paragraph too!";
myOtherP.classList.add("text-center");
document.querySelector("#newContent").appendChild(myOtherP);

// REMOVE AN ELEMENT BY USING THE .REMOVECHILD METHOD. WHICH YOU NEED TO SPECIFY A PARENT ELEMENT AND THE CHILD ELEMENT YOU WANT TO REMOVE.

document.querySelector("#newContent").removeChild(myOtherP);

// REMOVING AN ELEMENT USING THE .REMOVE() METHOD WHICH YOU CAN SIMPLY CALL WHATEVER ELEMENT YOU ARE TRYING TO DELETE AND CALL THE .REMOVE() ON THAT ELEMENT
// myNewP.remove();

const myAwesomeP = document.createElement("h6");
myAwesomeP.innerText = "I'm an EVEN BETTER paragraph";
myAwesomeP.classList.add("fs-1", "text-center");

// document.querySelector("#newContent").appendChild(myAwesomeP)

document.querySelector("#newContent").replaceChild(myAwesomeP, myNewP)


const anotherP = document.createElement("h3")
anotherP.innerText = "Just putting some words here for no reason.";
anotherP.id = "anotherP";
anotherP.classList.add("fs-1", "fw-bold", "text-center");
document.querySelector("h6").appendChild(anotherP)

const three =document.querySelector('#three');
const twoAndAHalf = document.createElement("li");
twoAndAHalf.innerText = "Two and a Half";
three.before(twoAndAHalf);

const threeAndAHalf = document.createElement("li");
threeAndAHalf.innerText = "Three and a half";
three.after(threeAndAHalf);