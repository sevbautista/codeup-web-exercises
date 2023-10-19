//While Loop
//Loop - will repeat action until the condition is false
// let i = 0;
//
// while(i <= 10) {
//     console.log(i);
//     i++
// }

let num = 1;
while(num <=32768) {
    console.log(num = num * 2);
}
// let num = 1;
// while(num <=65536){
//      num*= 2;
//      console.log(num)
// }

// -----my work

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

/*    Math.floor(Math.random() * 5) + 1;
let conesBought = 25
let allCones = 100

do {
    if (conesBought < allCones) {
        conesBought = Math.floor(Math.random() * 5) + 1;
    } else {
        if(allCones === 0) {
            console.log(`Sorry, I cannot sell ${conesBought} cones, I only have ${allCones} left`)
        }
    }
} while (  allCones - 25)*/


//---------Faruuk's walkthrough

//ice cream
// This is how you get a random number between 50 and 100
let allCones = Math.floor(Math.random() * 50) + 50;

do {
    let soldCones = Math.floor(Math.random() * 5) +1;
    console.log(allCones)
    if (soldCones <=allCones) {
        console.log(`${soldCones} cones sold...`)
        // allCones -= soldCones;
        allCones = allCones - soldCones;
    } else {
        console.log(`Cannot sell you ${soldCones} cones. I only have ${allCones}`)
    }
} while (allCones !== 0)
console.log("Yay! I sold them all!")

// console.log("---")
// console.log(soldCones);

let numb = '234.00';
console.log(parseFloat("40"));