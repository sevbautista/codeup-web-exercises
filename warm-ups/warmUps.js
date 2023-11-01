//Severiano Bautista
//Daily Warm-ups
// let name = "Severiano Bautista"
// let year = "2003"
//
// console.log('My name is ' +name + ' and the year that I graduated high school was ' + year)

//this comment

// Warmup Monday 16

// function capitalizeFirstLetter (str) {
//     return str.charAt(0).toUpperCase() + str.slice(1);
// }
// console.log(capitalizeFirstLetter("codeup"));

//I was forgetting to call the function itself, and not just the arguments, I also didn't parenthesis the string

// Warmup Tuesday 17th

//Math.max


// function largestNum(in1, in2, in3) {
//    return Math.max(input1, input2, input3)
// }
// console.log(largestNum(10,5,2))

// Do not forget about return
// do not always need parameters, but variables are called out in math method

//

// warm up Wednesday 18th
//1 Clone the repository
//2. Open the project in IntelliJ
//3. Create a new branch (firstName-lastName)
//4.Follow the directions in the hello.js file.
//5. Add, commit, and push to your named branch.

//git branching
//git branch shows available branches
//git checkout -b git-practice creates a new branch
//git-branching.txt in the root folder, "This text file is only visible on the git-practice branch. The only way I can see it in the main branch is to merge, which we are not doing..."
//you would then git status to see
//pull request is to help merge and shows you if branch even can be
//git checkout main returns you back to the main branch and all files in other branches are not visible
//a string requires string tags "", do not forget this

//warm up Thursday 19th
// let num = 100
//
// while (num > 0) {
//     num-= 5
//     if (num % 2 === 0 && num !== 0) {
//     console.log(num + " Even")
//     } else {
//         console.log(num)
//     }
// }
//&& allows multiple equations to run within parenthesis, also check if ; is or isn't needed first before changing too much
// while (num > 0) {
//     console.log((num));
//     num-= 5
//     if (num % 2 === 0);
//     console.log(num + " Even")
// }


//Warm up Friday 20th

//in your warmup.js create a function that uses a for loop that returns all the even numbers between 1 and 100. Console log your function.

function allEvenNumbers() {
    for (let i = 1; i <= 100; i++) {
        if (i % 2 === 0) {
            console.log(i)
        }
    }
}

allEvenNumbers();

//=====
// function returnEvenNums(){
//if you call the function at the end, the parameters that are called must match, ie. empty for empty, parameter with an argument
//     for(let i =1; i <= 100; i++){
//
//         if(i % 2 === 0){
//             console.log(i);
//         }
//     }
// }
// returnEvenNums();

// Monday 23rd Warmup
// In your warmup.js create an array of at least 5 of your favorite movies. Create a for each (or a for of loop) to console log all of your movies in alphabetical order

let favoriteMovies = ['Interstellar', 'Pandorum', 'Mandy', 'Mad Max: Fury Road', 'Edge of Tomorrow'];
//const and let are interchangeable here because...? we are not reusing the string name, just rearranging the contents
favoriteMovies.sort();
//i forgot the parenthesis to execute the Method.
console.log(favoriteMovies)
favoriteMovies.forEach(movie => console.log(`One of my favorite movies is ${movie}`));


for (let movie of favoriteMovies) {
    console.log(movie)
}
//

//Tuesday 24th Warm up

// in your warmup.js create an array of car objects. Each object should have 3 properties: make, model, and color. rite a for each or for of loop to log each car's make, model and color.

const cars = [
    {
        make: "Honda",
        model: "Accord",
        color: "Blue",
    },
//this whole section is considered "car" when you break it down with the dot (car.make, car.model, car.color)

    {
        make: "Toyota",
        model: "Matrix",
        color: "Black",
    },
    {
        make: "Chrysler",
        model: "200",
        color: "White",
    }
];

cars.forEach(car => console.log(`This is a ${car.color} ${car.make} ${car.model} `));
//Call the element(car) in the console, not the function itself (cars)

//for of:

let carss = [
    {make: "dodge", model: "challenger", color: "blue"},
    {make: "ferrari", model: "la ferrari", color: "red"},
    {make: "acura", model: "nsx", color: "black"}
    //this is one possible format for a "for of" method
]
for (let car of carss) {
    console.log(`Here is an awesome ${car.color} ${car.make} ${car.model}`)
}

//November 1

// Objective: Create a function that takes in an array and returns an array of the names of people who know JavaScript.

// Data Structure/Example Input:

let developers = [
    {
        name: "Jonathan",
        languages: {
            frontend: ["HTML", "JavaScript", "CSS"],
            backend: ["Java"]
        }
    },
    {
        name: "Bonnie",
        languages: {
            frontend: ["JavaScript"],
            backend: []
        }
    },
    {
        name: "Raj",
        languages: {
            frontend: [],
            backend: ["C#", "Java", "Python"]
        }
    },
    {
        name: "Carmen",
        languages: {
            frontend: ["JavaScript", "HTML", "CSS", "React"],
            backend: ["C#", "Java", "Python", "TypeScript"]
        }
    },
]

// function knowJava(arr){
//     for (let i = 0; i < developers.length; i++) {
//         let lang = ("Javascript").split;{
//         if (developers.indexOf(lang[i] -= 1)){
//             return arr
//         }
//     }
// }}
// console.log(knowJava("Javascript"))

// function knowsJavaScript(developer) {
//     for (let i = 0; i < developers.length; i++) {
//         return
//     }
// }
//go over "map" and "filter" method to understand it better

//go over the "includes" method for finding elements of an object


// This was Johnny's Method
// function devsWhoKnowJs(arrOfDevs) {
//     let jsDevsArr = [];
//     arrOfDevs.forEach((dev) => {
//         if (dev.languages.frontend.includes("javascript")) {
//             jsDevsArr.push(dev.name);
//         } else {
//             return `No devs with JS skills`;
//         }
//     })
//     return jsDevsArr;
//
// }

// console.log(devsWhoKnowJs(developers));

//Jays method
const knowsJavaScript = (arr) => {
    let javaScriptDevs = [];
    for (let i = 0; i < arr.length; i++) {
        // console.log(arr[i])
        // i is iterating through developers
        for (let j = 0; j < arr[i].languages.frontend.length; j++) {
            // console.log(arr[i].languages.frontend[j])
            //         j is iterating through frontend
            if (arr[i].languages.frontend[j] === "JavaScript") {
                javaScriptDevs.push(arr[i].name)
            }
        }
    }
    return javaScriptDevs;
}
console.log(knowsJavaScript(developers));