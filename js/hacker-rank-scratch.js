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


// function birthdayCakeCandles(candles) {
//     // Write your code here
//     for (let i = 0; i < candles.length; i++) {
//     // if (candles[i] > )
//     }
// }
//
// console.log(candles)


// let time = "";
// time = time.split(':');
// let hours = Number(time[0])
// let minutes = Number(time[1])
// let seconds = Number(time[2])
//
// let timevalue;
//
// function timeConversion(s) {
//     if (hours > 0 && hours <= 12) {
//         timeValue = "" + hours;
//     } else if (hours > 12) {
//         timeValue = "" + (hours - 12);
//     } else if (hours == 0) {
//         timeValue = "12";
//     }
//
// }
//
// timeValue += (minutes <10) ? ":0" + minutes : ":" + minutes;
// timeValue += (seconds <10) ? ":0" + seconds : ":" + seconds;
// timeValue += (hours >=12) ? "PM" : "AM";
//
// alert(timeValue);
// console.log(timeValue);
// ========


// function timeConversion(s) {
// // 's' IS PARAMETER, STRING OF TIME
// const [time, modifier] = s.split('');
// //
// let [hours, minutes] = time.split(':');
// // SPLIT STRING BY SYMBOL, COLON
// if (hours === '12') {
//     hours = "00";
// //     REPLACING 12 WITH 00
// }
// if (modifier === 'PM') {
//     hours = parseInt(hours, 10) + 12;
// //PULLING OUT THE INTEGERS, REMOVING OUT THE AM/PM
// }
// return `${hours}: ${minutes}`;
// }
// //


// ================


function timeConversion(s) {
    const [time, modifier] = s.split(' ');

    let [hours, minutes, seconds] = time.split(':');

    if (hours === '12') {
        hours = '00';
    }

    if (modifier === 'PM') {
        hours = parseInt(hours, 10) + 12;
    }

    return `${hours}:${minutes}:${seconds}`;
}

console.log(timeConversion('07:05:45PM'));  // Output: 19:05:45

// study this:
// function timeConversion(s) {
//     const [time, modifier] = s.split(' ');
//
//     let [hours, minutes, seconds] = time.split(':');
//
//     if (hours === '12') {
//         hours = '00';
//     }
//
//     if (modifier === 'PM') {
//         hours = parseInt(hours, 10) + 12;
//     }
//
//     return `${hours}:${minutes}:${seconds}`;
// }
//
// console.log(timeConversion('07:05:45PM'));  // Output: 19:05:45

//PRACTICE THIS TERMINOLOGY

// the radix
// The "10" in parseInt(hours, 10) represents the radix or base of the numeral system to be used. In JavaScript, when parsing strings into integers using parseInt, it's a good practice to specify the radix to avoid unexpected behavior.
//
// The radix is the base of the numeral system, and it can be any integer between 2 and 36. In this case, "10" represents the decimal (base-10) numeral system. By specifying the radix, you ensure that the function interprets the string correctly, especially when dealing with numbers that start with a leading zero (e.g., "08" or "09"). If the radix is not specified, some JavaScript implementations may interpret numbers with leading zeros as octal (base-8), leading to unexpected results.
//
//     So, using parseInt(hours, 10) explicitly tells JavaScript to treat the string as a decimal number, avoiding potential issues with leading zeros.
// ==========================================





// I NEED TO FIND THE SUM OF THE FOUR LOWEST NUMBERS AND THE SUM OF THE FOUR HIGHEST NUMBERS AND PUT THOSE TWO SUMS INTO A STRING SEPARATED BY A SPACE, I COULD PUSH THEM INTO A NEW ARRAY AND JOIN THEM USING SPACE TO REPLACE THE COMMA

// let arr = [1,2,3,4,5]
function miniMaxSum(arr) {
    // FIRST EMPTY ARRAY TO FILL WITH LOWEST FOUR
    let arr1 = []
    // SECOND EMPTY ARRAY TO FILL WITH HIGHEST FOUR
    let arr2 = []
    // 'i' REPRESENTS ITERATING ACROSS THE ARRAY, AND INCREMENTING BY 1
    for (let i = 0; i < arr.length; i++) ;
    // I NEED TO PULL THE LOWEST 4 NUMBERS INTO A SEPARATE ARRAY
    if (arr[i] < Math.max(arr)) {
        arr2.push(arr[i])
    }
}

// let arr = [1,2,3,4,5]
// console.log(arr2)








// =========================
//object with objects that contain value to find
// const myObject = {
//     obj1: {value: 254},
//     obj2: {value: 21},
//     obj3: {value: 525},
//     obj4: {value: 10}
// };
//
// // Variables to hold max value
// let maxValue = 0;

// //converting the object to an array
// const values = Object.values(myObject);
//
// //Using the .map() method to loop the array, find maximum value
// values.map((el) => {
//     //getting the value from each object and
//     //comparing to existing value
//     const valueFromObject = el.value;
//     maxValue = Math.max(maxValue, valueFromObject);
// });
//
// //Printing out the result
// console.log(maxValue);
//Output: 525