// console.log("Hello World!")

// let age = 12;
// if(age >= 16) {
//     console.log("You're eligible to drive.")
// }
//block scope code

// if (age < 16) {
//     console.log("You can't drive yet");
//
// }
//same example with if/else conditional

// if (age >= 16) {
//     console.log("You can drive.")
// } else {
//     console.log("Grow up!")
// }
//
// let currentDay = prompt ("What is the day today?").toLowerCase()

// if(currentDay === 'monday'||
//     currentDay === 'tuesday' ||
//     currentDay === 'wednesday') {
//     console.log ("I love " +currentDay)
// } else {
//     console.log(currentDay + "is not a valid day")
//
// }
// || operates as an "or"

// let letsPlay = confirm("Do you want to play");
//
// if (letsPlay) {
//     console.log ("Great lets play xyz")
// } else {
//     console.log("Maybe next time")
// }
//
// const username = "user";
// const password = "password";
//
// const userUsername = prompt ("Please enter a username")
// const userPassword = prompt ("Please enter a password")

//next I want to console.log ("You're logged in") if username userUsername && password, userPassword match

// if (username ===userUsername && password === userPassword) {
//     console.log ("You're logged in")
//
// } else if (username !== userUsername && password !== userPassword) {
//     console.log("Incorrect username and password")
// } else if (username !== userUsername) {
//     console.log ("Incorrect username")
// } else if (password !== userPassword) {
//     console.log ("Incorrect password")
// } else {
//     console.log ("Unexpected error")
// }
//
//
// Nested Conditional example
//
// if (username === userUsername) {
//     if (password === userPassword) {
//         console.log("Logged in")
//     } else {
//         console.log("Incorrect password")
//     }
// } else {
//     console.log ("Invalid username"
//     )
// }

// Ternary Operator

// ? takes the place of console.log, and : is the "else"conditional
// everything before "?" is considered if true condition

// let name = "Bob";
//
// let greeting = (name === "Bob") ? ("Hello, " + name) : ("Hello, stranger!");
// console.log(greeting);
//
// let currentCurrentDay = currentDay === 'monday' || currentDay === 'tuesday' || currentDay === 'wednesday' ? "I love " + currentDay : currentDay + " is not a valid day";
// console.log (currentCurrentDay)

//Switch Statement Example

let daysOfWeek = "Monday";

switch(daysOfWeek) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
        console.log("It's a weekday.")
        break;
    case "Saturday":
    case "Sunday":
        console.log ("It's a weekend day.");
        break;
    default:
        console.log("Invalid day of the week");
}
// SOMETHING ON THIS IS CAUSING AN ERROR

//Using Function and If/Else

function sayHello(name) {
    if(name.length <= 20) {
        return `Hello, ${name}`
    } else {
        return "That is way too long of a name."
    }
}
console.log(sayHello("Lasso"))