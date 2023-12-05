"use strict";
// Function to add a new coffee
// FUNCTION IS CREATING A NEW ELEMENT AND APPENDING TO HTML, NEEDS TO PUSH NEW COFFEE TO EXISTING COFFEES LIST
import {coffees} from "./coffeeList.js";
import updateCoffees from "./updateCoffees.js";
// ADDED A COUNTER TO ALLOW INCREMENTING OF ID
let counter = 15;
// const section = document.querySelector('#coffees');
const submitButton = document.querySelector('#submit');


export default function addNewCoffee() {
    // Get input values
    const newCoffeeName = document.getElementById('newCoffeeName').value;
    const newCoffeeRoast = document.getElementById('newCoffeeRoast').value;

    // Validate input values
    if (newCoffeeName === "" || newCoffeeRoast === "") {
        alert("Please enter both coffee name and roast type.");
        return;
    }

    // Create a new coffee object
    const newCoffee = {
        id: counter++,
        name: newCoffeeName,
        roast: newCoffeeRoast
    };

    // Add the new coffee to the coffees array
    coffees.push(newCoffee);

    // Render the updated list of coffees
    // section.innerHTML = renderCoffees(coffees);

    // Clear input fields
    document.getElementById('newCoffeeName').value = "";
    document.getElementById('newCoffeeRoast').value = "";

}



// section.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);

