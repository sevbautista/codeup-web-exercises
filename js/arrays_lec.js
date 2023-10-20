// //square brackets denote an array
//
// //.length displays how many elements within the array
//
// //array indices always start at zero, javascript is a zero index language (number 0,1,2,3,etc.)
//
// //accessing array element values using the index number
//
// const numbers: = [1,2,3,4];
// console.log(numbers[0]);//1
// console.log(numbers[1]);//2
// console.log(numbers[2]);//3
// console.log(numbers[3]);//4
// // ===
//
// console.log('There are ' + shapes.length + ' shapes in the array');
//
// console.log('The first shape is: ' + shapes[0]);
// // The first shape is:square
// console.log('The first shape is: ' + shapes[1]);
// console.log('The first shape is: ' + shapes[2]);
// console.log('The first shape is: ' + shapes[3]);
// console.log('The first shape is: ' + shapes[4]);
//
// //using for loops to iterate through an array
// // loop through the array and log the values
// for (let i = 0; i < shapes.length; i++) {
//     console.log('The shape at index ' + i + ' is: ' + shapes[i]);
//
// }
//
//
//using for of loop to iterate through an array
// const iterable = [1, 2, 3, 4, 5];
//
// for (let element of iterable) {
//     console.log(element)
// }
// for (let num of numbers ){
//     console.log(num)
// }

// shapes.forEach(shape => console.log(`Here is a love shapen: ${shape}.`));
// number.forEach(num => console.log(`This is a number in my numbers array: ${num}`));

// spread operator (...)
// using spread operator to add element of one array to another array
// const arr = [3, 5, 7]
//
// function randomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }
//
// const newArr = [...arr, randomNumber(23, 42)];
//
// console.log (newArr);
//
//
// //using spread operator to use the values within an array as arguments of a function
// const someNums = [12,41]
// function multiply(num1, num2){
//     return num1 * num2;
// }

// function add(...args) {
//     let total = 0;
//     for (let i = 0; i <args.length; i++) {
//         total += args[i];
//     }
//     return total;
// }
//
// // passing a various number of arguments of a function
// const randNumArr1 =[55, 1, 58, 66, 65, 92, 6, 87, 71, 48, 36, 96];
// console.log(add(...randNumArr1));
// const randNumArr2 =[72, 5, 90, 11, 43, 22, 100, 21];
// console.log(add(...randNumArr2));