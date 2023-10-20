"use strict"

// Manipulating arrays

//adding elements to an array using push( (adding to the end

//you can push or unshift one or more items, separated by commas, onto an array
const daysOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday'];

console.log(daysOfTheWeek);

//['Monday', 'Tuesday', 'Wednesday', 'Thursday'];
//
// let's add 'Sunday' to the beginning of the week
daysOfTheWeek.unshift('Sunday');

console.log(daysOfTheWeek);
//['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday']

// let's add 'Friday' and 'Saturday' to the end of the week
daysOfTheWeek.push('Friday', 'Saturday');
console.log(daysOfTheWeek);



//removing elements to an array using pop(removing from the end of an array), shift (removing from the front of an array)

const todoList = ['Take out the trash', 'Clean the car', 'Pay the bills'];

console.log('y todo List:');
console.log(todoList);

//['Take out the trash', 'Clean the car', 'Pay the bills']
console.log('Completing the last item:' + todoList[todoList.length -1]);
//
// let's remove the last item
const removedItem = todoList.pop();

//log what we did
console.log(('Task complete: ' + removedItem));
//
// ['Take out the trash', 'Clean the car']
//
// console.log('Completing the first item: ' +todoList[0]);

//let's remove the first item
const doneItem = todoList.shift();
//['Clean the car']
//
//locating array elements using .indexOf() (first index), and .lastIndexOf() (last index)
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'red'];

let index = colors.indexOf('green');
console.log(index);


let slice = colors.slice(2, 4);
console.log(colors);
console.log(slice);

slice = colors.slice(-3)
console.log(slice);




console.log ('Sorting the colors array.');
colors.sort();
console.log(colors);
let numberSort = [5,4,7,8,1]
numberSort.sort().reverse();
console.log(numberSort)

