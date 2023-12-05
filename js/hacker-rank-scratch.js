"use strict";

// DIAGONAL DIFFERENCE
function diagonalDifference(arr) {
    let LRarray = [];
    let RLarray = [];
    let LRtotal = 0;
    let RLtotal = 0;
    arr.map((num, index) => {
        // console.log(num)
        // console.log(index)
        // console.log(num[index])
        LRarray.push(num[index]);
    })
    // console.log(LRarray);
    arr.reverse().map((num, index) => {
        // console.log(num[index]);
        RLarray.push(num[index])
        // console.log(RLarray)
    })
    LRarray.forEach((num) => {
        LRtotal += num;
    })
    RLarray.forEach((num) => {
        RLtotal += num;
    })
    console.log(Math.abs(LRtotal - RLtotal))
}

diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]])

//===========
let ar = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]

let sum = 0
let result = []

function aVeryBigSum(ar) {
    for (let i = 0; i < ar.length; i++) {
        sum += ar[i];
    }
    return sum

}

console.log(sum)

// =========================


function birthdayCakeCandles(candles) {
    // Write your code here
    for (let i = 0; i < candles.length; i++) {
    if (candles[i] > )
    }
}

console.log(candles)
