"use strict"

//While loops

// While Loop
let number = 2;
while (number <= 65536) {
    console.log(number);
    number *= 2;
}

// Do While Loop
let allCones = Math.floor(Math.random() * 50) + 50;
do {
    const conesSold = Math.floor(Math.random ()*5)+1;
    if (conesSold <= allCones) {
        console.log(`${conesSold}) cones sold`);
        allCones -= conesSold;
    } else {
        console.log(`Sorry, I only have ${allCones}) cones left.`);

    }
} while (allCones > 0);