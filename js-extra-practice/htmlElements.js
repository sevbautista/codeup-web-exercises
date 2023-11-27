"use strict";

// function heading(str) {
//     let heading1 = '<h1>';
//     heading1 += str + '</h1>';
//     return heading1
// }

// ul 3 items long, parameter takes 3 inputs

// function unorderedList(input1, input2, input3) {
//     let unLi1 = ['<ul>','</ul>'];
//     let unLi2 = '<li></li>'
//     unLi1.splice(unLi1.indexOf('<ul>') +1, 0, 'input1', 'input2');
//     //     // unordered2 += input1 + '</ul>' && input2 + '</li>'*!
//     return unLi1 + unLi2

// }
// console.log(unorderedLis('word', 'sock'))

let string = '<ul></ul>';
let stringArr =string.split("> <")
console.log(stringArr);
let subString = stringArr.splice(1,0).join('<Li></Li>')
    // unLi.splice(1,0, '<Li>')
console.log(subString);


//
// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 0, 'Feb');
// // Inserts at index 1
// console.log(months);
// // Expected output: Array ["Jan", "Feb", "March", "April", "June"]
//
// months.splice(4, 1, 'May');
// // Replaces 1 element at index 4
// console.log(months);
// // Expected output: Array ["Jan", "Feb", "March", "April", "May"]
//
//
//
