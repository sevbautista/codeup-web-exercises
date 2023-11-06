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

    // const firstName = names[0].charAt(0).toUpperCase() + names[0].slice(1).toLowerCase();
    // const lastName = names[1].charAt(0).toUpperCase() + names[1].slice(1).toLowerCase();
    // const capitalizedName = `${firstName} ${lastName}`;
    //
    // return capitalizedName;
}}

// 1. isTrue
function isTrue(input) {
    return input === true;
}

// 2. isFalse
function isFalse(input) {
    return input === false;

}

// 3. not
function not(input) {
    return !input;
}

// 4. addOne
function addOne(input) {
    return ++input;
}

// 5. isEven
function isEven(input) {
    return (input % 2 === 0);
}

// 6. isIdentical
function isIdentical(num1, num2) {
    return num1 === num2;
}

// 7. isEqual
function isEqual(num1, num2) {
    return num1 == num2;
}

// 8. or
function or(num1, num2){
    return num1 || num2;
}

// 9. and
function and(num1, num2){
    return num1 && num2;
}

// 10. concat
function concat(input1, input2) {
    return String(input1) + String(input2);
}
