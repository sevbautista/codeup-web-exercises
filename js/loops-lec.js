// let i = 0;
//
// while(i <= 10) {
//     console.log(i);
//     i++
// }

// do while loops
// let i = 12;
//
// do {
//     console.log(i);
//     i++
// } while(i < 10)

// IF BROWSER/COMPUTER STUCK ON INFINITE LOOP
// to exit
// DO  (Command + Option + ESC)
// OR shutdown your computer using the physical button



//  --------------- mini exercise -------------------------
// create a variable called num that is equal to 0;
// Write a while loop that increment "num" by 5 so long as num is less than 100
// Do the same thing with a do-while

// let num = 0;
//
// while(num < 0) {
//     console.log(num)
//     num += 5;
// }

// do {
//     console.log(num);
//     num += 5;
// } while(num < 0);

// const secretNumber = 7;
// let guess;
// let attempt = 0;
//
// // do-while loop
//
// do {
//     guess = parseInt(prompt("Guess the secret number (1-10):"));
//     attempt++
//     if(guess === secretNumber) {
//         console.log("You have guessed the lucky number")
//     } else {
//         if(guess < secretNumber) {
//             console.log("Try a higher number.")
//         }else {
//             console.log("Try a lower number");
//         }
//         console.log("You suck at guessing!!!!!! " + attempt + " total attempt")
//     }
//
//
// }while (guess !== secretNumber)


// for-loops
//
// for (/*initialization*/; /*condition*/; /*increment*/) {
//     body
// }


// for(let i = 10; i <= 20; i++) {
//     console.log(i)
// }


//  num += 5   is the same as num = num + 5
// for(let num = 0; num < 100; num += 5) {
//     console.log(num)
// }

// let hello = "hello";
// // console.log("Hello is " + hello.length + "length")
// for(let i = 0; i <= hello.length; i++) {
//     console.log(hello.charAt(i))
//     console.log(hello[i])
// }

// for (/*initialization*/; /*condition*/; /*increment*/) {
//     body
// }
// for(let i= 0, j = 0; i <= 100; i++, j++) {
//     console.log("for loop iteration #" + "i = " + i);
// }


// Break
// for(let i = 0; i < 100; i += 5) {
//     // console.log(i)
//     break;
//     console.log("snippet never reached");
// }
//
//
// for(let i = 0; i < 100; i += 5) {
//     console.log(i)
//     if(i === 50) {
//         break;
//     }
// }

// console.log("Trying to break out of loop")
//
// // continue
// for(let i = 1; i <= 5; i++) {
//     if(i === 3) {
//         continue;
//     }
//     console.log(i)
// }


for (let i = 1; i < 100; i++) {

    if (i % 2 !== 0) {
        // number isn't even
        // odd numbers aren't as cool
        // skip the rest of the loop and continue with the next iteration
        continue;
    }

    console.log(i);
}
