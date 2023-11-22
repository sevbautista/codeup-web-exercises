const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// 2. Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
const lang = users.filter(userLang => userLang.languages.length >= 3);

console.log(lang)
//HAD MISSED ARROW FUNCTION, WAS INCOMPLETE, LOGIC WAS CORRECT.


// 3. Use .map to create an array of strings where each element is a user's email address
const emails = users.map(userEmail => userEmail.email);
console.log(emails)

//4. Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

const years = users.reduce((accumulation, currentNumbers) => {
    //DOESN'T HAVE TO BE ACCUMULATION/CURRENTNUMBERS
    return accumulation + currentNumbers.yearsOfExperience / users.length; // DIVIDING BY NUMBER OF USERS TO FIND AVG
}, 0);

console.log(years)

//5. Use .reduce to get the longest email from the list of users.

// var emailLength = 0; THIS WAS NOT NECESSARY
// var longest; THIS WAS NOT NECESSARY
// AGAIN DIDN'T NEED TO USE THESE TERMS, COULD USE OTHER TERMS THAT APPLY TO WHAT I WAS LOOKING FOR FOR EXAMPLE LONGEST AND EMAIL ARE RELEVANT HERE - DOESN'T MATTER NAME, JUST PARAMETERS THAT ARE CHECKED TO MAKE SURE YOU ARE RETURNING THEIR CORRECT VALUE
const longestEmail = users.reduce((accumulation, currentNumber ) => {
 // for (let i = 0; i <)
 //    USE INSTEAD FOR EXAMPLE CURRENTNUMBER.LENGTH > ACCUMULATION.LENGTH AND THEN RETURN WHICHEVER IS LONGER
    return currentNumber.email.length > accumulation.email;
})
console.log(longestEmail)

//==============
// var arr = [
//     'first item',
//     'second item is longer than the third one',
//     'third longish item'
// ];

// var lgth = 0;
// var longest;
//
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i].length > lgth) {
//         var lgth = arr[i].length;
//         longest = arr[i];
//     }
// }

// console.log(longest);
//=======================

//  6. Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
// const names = users.reduce((accumulation, currentN) => {
//
// })
let instructors = users.reduce(function(output, user,currentIndex) {
    if(currentIndex === users.length -1){
        return `${output} ${user.name}.`
    }
    return `${output} ${user.name},`;
}, "Your instructors are:")
console.log(instructors)

