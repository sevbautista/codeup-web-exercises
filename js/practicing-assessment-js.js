"use strict"

function isNegative(number) {
    return number < 0;
}

// Example usage:
console.log(isNegative(-5)); // Out
// ==

function isTen(number) {
    return number === 10;

function capitalizeName(fullName) {
    const names = fullName.split(' ');
    if (names.length !== 2) {
        return "Invalid input";
    }

    const firstName = names[0].charAt(0).toUpperCase() + names[0].slice(1).toLowerCase();
    const lastName = names[1].charAt(0).toUpperCase() + names[1].slice(1).toLowerCase();
    const capitalizedName = `${firstName} ${lastName}`;

    return capitalizedName;
}}