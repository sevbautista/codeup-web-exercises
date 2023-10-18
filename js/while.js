//While Loop
//Loop - will repeat action until the condition is false
// let i = 0;
//
// while(i <= 10) {
//     console.log(i);
//     i++
// }
//
// let num = 1;
// while(num <=32768) {
//     console.log(num = num * 2);
// }

// -----

// This is how you get a random number between 50 and 100
// let allCones = Math.floor(Math.random() * 50) + 50;

// // let allCones = 100
// do {
//     boughtCones === 10
//     if (boughtCones < allCones) {
//         console.log(`${boughtCones} cones sold!`);
//     } else {
//         if (boughtCones > allCones)
//             console.log(`Cannot sell you ${boughtCones} cones, I only have ${allCones}`)
//     }
// } while (boughtCones < 100)

    // This expression will generate a random number between 1 and 5

    // Math.floor(Math.random() * 5) + 1;

let allCones = 100
do { conesBought = allCones -= 10;
    // Math.floor(Math.random() * 5) + 1;
    if (conesBought < allCones) {
        console.log(`${conesBought} cones sold`)
} else {
        if(conesBought > allCones) {
            console.log(`Sorry, I cannot sell ${conesBought} cones, I only have`)
        }
    }
} while (allCones >= conesBought)
    //     if (guess < secretNumber) {
    //         console.log("Try a higher number.")
    //     } else {
    //         console.log("Try a lower number.");
    //     }
    //     console.log("Wrong guess, my guy! " + attempt + " total attempts")
    // }

// }while (guess !== secretNumber)
//while is only for condition, do is for logic