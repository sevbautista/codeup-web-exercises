// "use strict"
//
// import renderCoffee from "./renderCoffees.js";
import {coffees} from "./coffeeList.js";
// import addNewCoffee from "./addNewCoffee.js";



// function renderCoffees(coffees) {
//     let html = '';
//     for (let i = coffees.length - 1; i >= 0; i--) {
//         html += renderCoffee(coffees[i]);
//     }
//     return html;
// }
//
//
// // CHECKING IF AN OPTION IS ALL ROASTS, IF SO WILL DISPLAY ALL ROASTS
// // ADDED AN IF STATEMENT FOR CHECKING FOR ALL ROASTS FIRST THEN CONTINUE WITH THE FUNCTION
// // NOT SURE IF THERE'S A NICER WAY TO SHOW THIS
// function updateCoffees(e) {
//     e.preventDefault(); // don't submit the form, we just want to update the data
//     const selectedRoast = roastSelection.value;
//     if (selectedRoast === "All Roasts") {
//         section.innerHTML = renderCoffees(coffees);
//     } else {
//         const filteredCoffees = [];
//         coffees.forEach(coffee => {
//             if (coffee.roast === selectedRoast) {
//                 filteredCoffees.push(coffee);
//                 section.innerHTML = renderCoffees(filteredCoffees);
//             }
//         });
//         section.innerHTML = renderCoffees(filteredCoffees);
//
//     }
// }
//
//
//
// // SEARCH BAR CODE TO MAKE IT CASE INSENSITIVE WHEN LOOKING FOR A PARTICULAR BREW
//
// const searchBar = document.getElementById("coffee-name");
//
// searchBar.addEventListener("input", function () {
//     const searchTerm = this.value.toLowerCase();
//     const resultsList = coffees.filter(coffee => coffee.name.toLowerCase().includes(searchTerm));
//
//     section.innerHTML = renderCoffees(resultsList);
// });
//
// const section = document.querySelector('#coffees');
// const submitButton = document.querySelector('#submit');
// const roastSelection = document.querySelector('#roast-selection');
//
// section.innerHTML = renderCoffees(coffees);
//
// submitButton.addEventListener('click', updateCoffees);
//
// //============================================================//
//



// SEARCH BAR CODE TO MAKE IT CASE INSENSITIVE WHEN LOOKING FOR A PARTICULAR BREW

const searchBar = document.getElementById("coffee-name");

searchBar.addEventListener("input", function () {
    const searchTerm = this.value.toLowerCase();
    // const resultsList = coffees.filter(coffee => coffee.name.toLowerCase().includes(searchTerm));

    // section.innerHTML = renderCoffees(resultsList);
});