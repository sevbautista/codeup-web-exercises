'use strict'

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// .filter: makes sure each element in the collection meets some criteria or passes some test.
// using filter to loop through the array and returns an array of  all even numbers
const evens = numbers.filter(n => n % 2 === 0);
console.log(evens); // [2, 4, 6, 8, 10]


// .map: transforms each element in the collection.
// using map to loop through the array and add 1 to each element
const incremented = numbers.map(n => n + 1);
console.log(incremented); // [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]


const numbers1 = [1, 2, 3, 4, 5];
// .reduce: reduces a collection to a single value.
// using reduce to add each number in the array to the nex number in the array
const sum = numbers1.reduce((accumulation, currentNumber) => {
    return accumulation + currentNumber;
}, 0);
console.log(sum)


const salesPeople = [
    {name: 'Jim Halpert', sales: 100},
    {name: 'Dwight Schrute', sales: 50},
    {name: 'Andy Bernard', sales: 150},
];
// using reduce to add each sales value to the next sales value
const totalSales = salesPeople.reduce((total, person) => {
    return total + person.sales;
}, 0);
console.log(totalSales)


// using reduce to transform our array of strings into an object
function countWords(sentence) {
    const words = sentence.split(' '); // transform a sentence into an array of words
    const wordCountObject = words.reduce((wordCounts, word) => {
        if (typeof wordCounts[word] === 'undefined') {
            // if the word is not yet present in our object, set it's value to 1
            wordCounts[word] = 1;
        } else {
            // otherwise increment the existing count
            wordCounts[word] += 1;
        }
        return wordCounts;
    }, {}); // start with an empty object
    return wordCountObject;
}

console.log(countWords('Mary had a little lamb little lamb little lamb'));
// {Mary: 1, had: 1, a: 1, little: 3, lamb: 3}


const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue,
);

console.log(sumWithInitial);
// Expected output: 10