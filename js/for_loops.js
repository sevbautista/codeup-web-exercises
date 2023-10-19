"use strict";

// ===== Exercise 2.
function showMultiplicationTable(num) {
    for(let i = 1; i <= 10; i++)
        console.log(num * i)
}
showMultiplicationTable(7)


// faruuk's walkthrough
// function showMultiplicationTable(num) {
//     for(let i = 1; i <= 10; i++)
//         console.log(`${num} x ${i} = ${num * i}`);
// }
// showMultiplicationTable(7)

//here I was checking to see if I could use a prompt to produce the input, however I couldn't get it to prompt from withing the function
//leaving this here to show my thought process and how I wasn't able to get a prompt to work with the mistakes I had already

// let numb = prompt ('Enter a number to multiply');
//
// function showMultiplicationTable(num) {
//     for(let i = 1; i <= 10; i++)
//         console.log(num * i)
// }
// showMultiplicationTable(numb)

// this is the work I was doing to get to the answer of the exercise

// function showMultiplicationTable(num) {
//     for(let num = 1; num <= 10; num++)
//         console.log(7 * num++)
// }
// console.log (showMultiplicationTable(num))

//i kept trying to call the variable within the function,

// let userInput = prompt ('Enter a number to multiply')
// function showMultiplicationTable(num) {
//     for (let num = 1; num <= 10; num++) {
//     }
//     return (`${userInput}` * num)
// }

// let showMu = prompt ('Enter a number to multiply');
// function showMultiplicationTable(num) {
//     let showMu = prompt('Enter a number to multiply');
//     return showMu;
// }
//     for (let num = 1; num <= 10; num++){
//         console.log(showMu * num)
// }
//     }

// function showMultiplicationTable(input1) {
// }
// console.log(showMultiplicationTable(2))
//     for (let num = 1; num <= 10; num++) {
//         return input1 * num;


//Faruuk's Walkthrough


//Exercise 3.
// Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. For example:
//
//     123 is odd
// 80 is even
// 24 is even
// 199 is odd


// for (let i = Math.floor(Math.random() * 200) + 20;;
//     if (i % 2 === 0);
//     console.log (i, " is even")
// }
// for (let i = 1; i <= 5; i++) {
//     if (i === 3) {
//     }
//     console.log()
// }
//     if (num % 2 === 0);


// Faruuk's walkthrough
//i = 0 starting number will increase from zero
// the math.random will ((200-20)+1) +20) this will start it at 20, the +1 tells the function to be inclusive of the number range

//4. Exercise
//Faruuk's walkthrough
//review .toString method and .repeat method's and how they can be added into console.logs
//

// Exercise 5

//Faruuk's Walkthrough
//method is similar to warm up, we are just reversing the numbers