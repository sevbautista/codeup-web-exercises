"use strict";

//create a function named sum that takes in two numbers and returns the sum of the two numbers

// Function Definition / Function Declaration
// function sum(num1, num2) {
//     parameters that can be anything
    // return num1 + num2;
// }

// Calling the function / Execute the function.
//console.log(sum(21,19));
//arguments which give parameters value

//Create a function named fullName that takes in two inputs, a first name and last name, and returns the first name and last name concatenated together;

//Refactor with Template Literals
// function fullName(firstName, lastName) {
//     return `${firstName} ${lastName}`
//this will never run due to our return statement being executed before the console.log()
    //console.log('Function has finished!');
// }
// Function with Concatenation
// function fullName(firstName, lastName) {
//     return firstName +" "+ lastName;
//     }
// space for output can be put in the return of function to add a space between the two arguments, instead of in the arguments themselves
//console.log(fullName("Sev","Bautista"))
//string literals

//console.log(`Hello ${fullName('Sev', 'Bautista')}, did you know that 5 + 5 = ${sum(5, 5)}`))


// Anonymous Function / Function Expression

const decrement = function(input) {
    return input - 1;
}

console.log(decrement(5));

// Arrow Functions
// function declaration

// function fullName(firstName, lastName) {
//  return firstName + " " + lastName;
// }

// arrow Function

// longer arrow function

// const fullName = (firstName, lastName) => {
//     return firstName + " " + lastName;
//
// }
// If an arrow function only has 1 parameter, parenthesis are optional!

// shorter arrow function

// The return is implied if no curly braces are present.
// const fullName = (firstName, lastName) => firstName + " " + lastName;

// console.log(fullName('Michael', 'Myers'));


// // Create a function that takes in a string and transforms the string to lowercase.
//
// let sampleString = "HoW oN eArTh doEs thIs wOrK?"
// //string is immutable, can't be changed
// // Function Declaration
// // function lowerCaseString(str) {
// // //     sampleString = str.toLowerCase()
// // // }
//
// // console.log(sampleString);
// // lowerCaseString(sampleString);
//
// // console.log(sampleString);
//
// // const lowerCaseString = (str) => str.toLowerCase();
// //without curly braces, the return is implied
//
// // const lowerCaseString = (str) => {
// //     return sampleString = str.toLowerCase()
// //adding a return makes the str unnecessary
// // };
// console.log(sampleString);
// console.log(lowerCaseString(sampleString));
// console.log(sampleString);
//
// // function increment(num) {
// // alert(num +1);
// // }

function greeting(greeting = 'Howdy!') {
    return greeting;
}
console.log(greeting());
console.log(greeting('Greetings!'));


let globalVar = "Hello! My name is Globie!"

function test() {
    let localVar = 'Hello, my name is Lola';
//only defined within the scope
    {
        let innerVar = 'Nested Var!'
        console.log(innerVar);
        console.log(localVar);
    }
    // console.log(innerVar);
    console.log(globalVar);
}
// console.log(localVar)
test();