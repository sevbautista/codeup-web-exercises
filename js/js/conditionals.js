"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

function analyzeColor(input) {
    if (input === "red") {
        return "This is the best color!";
    } else {
        // else if (color === "blue"){
        // return "blue is blue!";
    //} else if (color === "cyan") {
        // return "cyan is neat";
        //else {
        // return "I don't know anything about" + color
        return "Don't like this color.";
    }
}

console.log(analyzeColor("red"))
// Exercise review:
//review else and else if statements and their use

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
// const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// const randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

// console.log(analyzeColor(randomColor))

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
function analyzeColor(color) {
    switch (color) {
        case 'red':
            return "Bad color!"
        case 'orange':
            return "What a great color!"
        case 'yellow':
            return "Bad color!"
        case 'green':
            return "What a great color!"
        case 'blue':
            return "Bad color!"
        case 'indigo':
            return "What a great color!"
        case 'violet':
            return "Bad color!"

    }
}
//Review switch statements and their use
// function analyzeColor(color) {
//     switch(color){
//         case("blue"):
//             return "sky is blue"
//         case("red"):
//             return "red is red"
//         default:
//             return "I don't know anything about that color" +color;
//     }
//
// }
// console.log(analyzeColor(cyan))
//
//compare use of parenthesis
//return vs break: return will return a value, console.log will just move onto the next case
//so you have to use break to let it move to the next statement

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

let userInput1= prompt("Pick a color, user!")
// console.log(analyzeColor(userInput1))
alert(analyzeColor(userInput1))


/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
// function calculateTotal(luckyNumber, totalAmount) {
//     if (luckyNumber === 5 && discountPercent === 100)
//         if (luckyNumber === 4 && discountPercent === 50)
//             if (luckyNumber === 3 && discountPercent === 35)
//                 if (luckyNumber === 2 && discountPercent === 25)
//                     if (luckyNumber === 1 && discountPercent === 10)
//                         if (luckyNumber === 0 && discountPercent === 0)
//
//                             return (`totalAmount - (total amount * (${discountPercent}/100))`)
// }
//     function calculateTotal(luckyNumber, totalAmount) {
//
// return (`totalAmount - (total amount * (${discountPercent}/100))`)
//
// //50 - (50 (*10/100 ))=
//
// }
// console.log(calculateTotal(5, 50)

//50 - (50 (*10/100 ))=

// }
// function calculateTotal(luckyNumber, totalAmount) {
//     let discountPercent =35;
//         return (`${totalAmount} - (${totalAmount} * (${discountPercent}/100))`)
//
// //50 - (50 (*10/100 ))=
//
//     }
//     console.log(calculateTotal(3, 35))

// function calculateTotal(luckyNumber, totalAmount) {
//     if luckyNumber = 5
// }
//

//Review:
// putting in math in a function when it comes to division and multiplication of fraction
// of
// function (luckyNumber, totalAmount) {
//     if(luckyNumber === 0){
//         return totalAmount;
//     } else if(luckyNumber === 1){
//         return totalAmount - (0.10 * totalAmount);
//     }
// }
//Review how math is included in functions
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
const luckyNumber = Math.floor(Math.random() * 6);
// template literals allow you to not worry about your spaces and your quotes and plus signs
//
//
//
//

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */


//review the method

//nested if/else statements keep track when using these
// get used to using code comments to keep track of what I am doing
// also allows me to refer back to understand where I was
// you can group const within the function
//alerts can be one big group or split up separately but
//will read all from top to bottom
//variable that is scoped within an if statement can't be called outside of that statement
// command option l will realign code so that it is where it should be
//if means should the conditions be true, then the following applies
//be more descriptive with variable names, whole words or statements
//review what float in parseFloat means and how it is used
//if conditions can fall outside of a function
// else at the bottom can be a "catch all"
//make sure your operators are being used correctly
// zero, 0 is neither even nor odd
//breaking it down into separate functions
