"use strict";

//IF BROWSER/COMPUTER STUCK ON INFINITE LOOP
//to exit
// Do (Command + Option + ESC) to force close program
// OR shutdown your computer using the physical button

//While Loop
//Loop - will repeat action until the condition is false
// let i = 0;
//
// while(i <= 10) {
//     console.log(i);
//     i++
// }

//Do-While Loops
//will run once, no matter the condition.
// let i = 12;
// do {
//     console.log(i)
//     i++
// } while (i < 10)

// ---------------------mini-Exercise--------------------
//create a variable called num that is equal to 0;
//Write a while loop that increment "num" by 5 so long as num is less than 100
//when done, do the same thing with a do-while

// let num = 0
// while (num < 100) {
//     console.log(num)
//     num += 5;
// }
//
// do {
//     console.log(num)
//     num += 5;
// } while (num < 100);

// do {
//     console.log(num)
//     num += 5;
// } while (num < 0);
// this would stop before "while" because it will run once, and not initiate another run due to meeting condition

// Next Exercise
//
// const secretNumber = 7
// let guess;
// let attempt = 0;
// do-while loop
//
// do {
//     guess = parseInt(prompt("Guess the secret number (1-10):"));
//     attempt++
//     if(guess === secretNumber) {
//         console.log("You have guessed the lucky number")
//     }else {
//         if (guess < secretNumber) {
//             console.log("Try a higher number.")
//         } else {
//             console.log("Try a lower number.");
//         }
//         console.log("Wrong guess, my guy! " + attempt + " total attempts")
//     }
//
// }while (guess !== secretNumber)
//while is only for condition, do is for logic

//FOR loops

//for (/*initialization*/; /*condition*/; /*increment*/) {
//    // body
// }



// for(let i = 10; i <=20; i++) {
//     console.log(i)
// }
//
// for(let num = 0; num < 100; num += 5) {
//     console.log(num)
// }
// // num += 5 shorthand for num = num + 5
//
// let hello = "hello";
// for (let i = 0; i <= hello.length; i++) {
//     console.log(hello[i])
// }
//
// let hello = "hello";
// for (let i = 0; i <= hello.length; i++) {
//     console.log(hello.charAt(i))
// }


//
// for(let i =0, j = 9; i <10; i++, j--) {
//     console.log("for loop iteration #" + "i = " + i + ', j=' +j);
// }
//
// for (let w = 2; w < 25; w++) {

// console.log("w is " + w);
// }



// Break

// for (let i = 0; i < 100; i += 5) {
//     console.log(i)
    // break;
// }   console.log("snippet never reached");
//

for (let i = 0; i < 100; i += 5) {
    console.log(i)
    if (i === 50) {
        break;
    }
}
console.log("Trying to break out of loop")

//Continue

for(let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i)
}


for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    console.log ('Here is a lovely even number: ' + i);
}
// =====
// for (let w = 2; w < 25; w++) {
//
// console.log("w is " + w);
// }

//this is me testing out the for loop on my own
