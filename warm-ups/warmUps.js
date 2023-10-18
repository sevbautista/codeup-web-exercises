//Severiano Bautista
//Daily Warm-ups
let name = "Severiano Bautista"
let year = "2003"

console.log('My name is ' +name + ' and the year that I graduated high school was ' + year)

//this comment

// Warmup Monday 16

function capitalizeFirstLetter (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(capitalizeFirstLetter("codeup"));

//I was forgetting to call the function itself, and not just the arguments, I also didn't parenthesis the string

// Warmup Tuesday 17th

//Math.max


function largestNum(in1, in2, in3) {
   return Math.max(input1, input2, input3)
}
console.log(largestNum(10,5,2))

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