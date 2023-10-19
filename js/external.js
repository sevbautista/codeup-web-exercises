"use strict";

console.log("Hello from external JavaScript")
alert ("Welcome to my Website!")

let userInput = prompt("What's your favorite color?")
alert(`Great, ${userInput} is my favorite color too!`)

//Write some JavaScript code, that is, variables and operators, to describe the following scenarios.
// Do not worry about the real operations to get the values, the goal of these exercises is to understand how real world conditions can be represented with code.
// You have rented some movies for your kids:
// The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it).
// If price for a movie per day is $3, how much will you have to pay?


// let p = 3
// let little = 3
// let bear = 5
// let hercules = 1
//
// console.log((little + bear + hercules) * p)
// another method
// let littleCost = little * p;
// let bearCost = bear * p;
// let herculesCost = hercules * price;
// let totalCost = littleCost + bearCost + herculesCost
// console.log(totalCost)

let userInput1 = parseInt (prompt("How many days did you rent the Little Mermaid for?"))
 alert(`${userInput1}?`)

let userInput2 = parseInt (prompt ("And how many days did you have Brother Bear?"))
alert (`${userInput2}?`)

let userInput3 = parseInt (prompt ("And so then how many days did you rent Hercules for?"))
alert (`${userInput3}?`)

let pa = 3
let cost = (userInput1* pa) + (userInput2 * pa) +(userInput3 * pa)

//console.log((userInput1 + userInput2 + userInput3) * pa)
console.log(`So then if they cost $3 a day, you owe ${cost} `)
// alert(`So then if they cost $3 a day, you owe $${cost} `)
alert(`So then if they cost $3 a day, you owe $${cost.toFixed(2)} `)
// adding .toFixed will add the decimals needed for coin totals.


// Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour.
// Google pays $400, Amazon $380, and Facebook $350.
// How much will you receive in payment for this week?
// You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

let gPay = prompt ("How much does Google pay you per hour?")
alert (`${gPay}, right?`)

let amaPay = prompt ("How much does Amazon pay you per hour?")
alert (`${amaPay}, right?`)

let fPay = prompt ("And how much does Facebook pay you?")
alert (`${fPay}, right?`)
let gHours = 6
let amaHours = 4
let fHours = 10

let pay = (gPay * gHours) + (amaPay * amaHours) + (fPay * fHours)
//removed the string literals I had here as they were printing the math out into the alert rather than just the result
alert (`"So then if you worked 20 hours, you should have made ${pay}"`)

//command + d will duplicate a line to simplify repeated line inputs
//camelcase is lowercase first word and uppercase following case

