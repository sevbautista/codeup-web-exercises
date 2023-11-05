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

function issNegative(num) {
    return num < 0;
}


//1 isTrue

function isTrue(num){
    return num === true;
}

// 2 isFalse
function isFalse(num) {
    return num === false;
}

//3 not
function not(num){
    return !num;
}

//4 addOne

function addOne(num) {
    return ++num;
}

// 5 isEven
function isEven(num) {
    return (num % 2 === 0);
}

//6 isIdentical

function isIdentical(num1, num2) {
    return num1 === num2;
}

//7 visEqual

function isEqual(num1, num2) {
    return (typeOf num1 == num2);
}