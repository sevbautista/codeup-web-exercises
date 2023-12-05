"use strict";

import {coffees} from "./coffeeList.js";

export default function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    const selectedRoast = roastSelection.value;
    if (selectedRoast === "All Roasts") {
        // section.innerHTML = renderCoffees(coffees);
    } else {
        const section = document.querySelector('#coffees');

        const filteredCoffees = [];
        coffees.forEach(coffee => {
            if (coffee.roast === selectedRoast) {
                filteredCoffees.push(coffee);
                section.innerHTML = renderCoffees(filteredCoffees);
            }
        });
        section.innerHTML = renderCoffees(filteredCoffees);

    }
}

const roastSelection = document.querySelector('#roast-selection');
