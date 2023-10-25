"use strict";
//Break and Continue exercise
while(true){

let  userInput = parseInt(prompt("Give me an odd number between 1 and 50"));
if (userInput >= 1 && userInput <= 50 && userInput % 2 === 1){
console.log(`number entered ${userNumber}`);
for (let i = 1; i <=50; i += 2) {
    if(i === userInput) {

    }
}
)}
}

//Faruuk's walkthrough
//broke into separate parts and combined both into a while loop
//
// while(true){
//     let userNumber = parseInt(prompt("Please enter an odd number between 1 and 50"));
//     //we are parsing out the integer from the users response to our prompt
//     if (userNumber >= 1 && userNumber <= 50 && userNumber % 2 === 1) {
//         // if our users' input is between 1 and 50  and odd their number will be displayed in the console log
//         console.log(`Number entered ${userNumber}`);
//
//         for (let i = 1; i <=50; i += 2) {
//           if(i === userNumber) {
//             console.log(`Yikes! Skipping number: ${userNumber}`);
//             continue;
//         //     this is where we are prompting the user to reenter a response if their input was invalid
//         }
//         console.log(`Here is an odd number: ${i}`)
//     //our odd number will be displayed
//     }
//     break;
// //         here we break our iteration and if the following outstanding conditions apply the alert will display
// } else {
//         alert("Invalid input. Please enter an odd number between 1 and 50")
//
//     }
// }