"use strict";
export default function renderCoffee(coffee) {
    let counter = 15;
    let html = '<div class="coffee row col-6">';
    // ADDED COUNTER TO INCREMENT ON NEW COFFEES, OR TO CALL EXISTING ID'S ON CURRENT COFFEES
    html += `<p id="coffee-id">${coffee.id || counter++}</p>`;
    html += `<p class="col-7">${coffee.name}</p>`;
    html += `<p class="col-5">${coffee.roast}</p>`; //p tag
    html += '</div>'; //div

    return html;
}