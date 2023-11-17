// STORING ID TO DECLUTTER CODE AND NOT HAVE TO TYPE EVERYTHING OUT, JUST THE VARIABLE
const newContent = document.querySelector("#newContent");
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

// REMOVE AN ELEMENT BY USING THE .removeChild METHOD. WHICH YOU NEED TO SPECIFY A PARENT ELEMENT AND THE CHILD ELEMENT YOU WANT TO REMOVE.

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

const three = document.querySelector('#three');
const twoAndAHalf = document.createElement("li");
twoAndAHalf.innerText = "Two and a Half";
three.before(twoAndAHalf);

const threeAndAHalf = document.createElement("li");
threeAndAHalf.innerText = "Three and a half";
three.after(threeAndAHalf);

document.querySelector("#numbers").innerHTML += `<li>Six</li>`;


const toDoInput = document.querySelector("#to-do");
const toDoForm = toDoInput.parentElement;

// const handleUserInput = () => {
//     console.log(toDoInput.value);
// }
// NEED TO PREVENT BROWSERS DEFAULT ACTION
const handleUserInput = (event) => {
    event.preventDefault();
    console.log(toDoInput.value);
    toDoInput.value = '';
}
toDoForm.addEventListener('submit', handleUserInput);

// OBTAIN REFERENCE TO THE BUTTON THAT WILL TRIGGER DIV CREATION
const createButton = document.querySelector("#create-a-div");
// FUNCTION TO CREATE NEW DIVS
// WITHIN EACH DIV THERE IS A BUTTON WITH THE CLASS 'event-trigger'
const createDiv = () => {
    const newDiv = document.createElement("div");
    newDiv.classList.add("dynamic-div");
    newDiv.innerHTML = "<p>I'm a new div!</p>" +
        "<button class='event-trigger'>Click Me!</button>";
    document.querySelector("#new-div-section").appendChild(newDiv);
//     ADD EVENT HANDLER TO BUTTON HERE
    newDiv.lastChild.addEventListener('click', () => console.log('Clicked'));
}
// ADD THE CLICK HANDLER TO THE BUTTON
createButton.addEventListener('click', createDiv);

// THIS CODE WILL NOT WORK WITHOUT THE HANDLER ABOVE
const eventButtons = document.querySelectorAll(".event-trigger");
const buttonEvent = () => console.log('Clicked!');
eventButtons.forEach(button => button.addEventListener('click', buttonEvent));

const newDivSection = document.querySelector("#new-div-section");
// THIS CODE WILL LOOK FOR EVENT TRIGGER TO CONSOLE LOG IT
newDivSection.addEventListener('click', (e)=> {
    if (e.target.classList.contains('event-trigger')){
        console.log('I also say Clicked!');
    }
})