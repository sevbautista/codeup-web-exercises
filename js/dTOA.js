let a = 1;
//a = 3
let b = a++;
//b = 1
let c = ++a;
//3
// what is the value of a, b, and c?
console.log(a);
console.log(b);
console.log(c);

let d = "hello";
let e = false;

d++;
//NaN
e++;
//1

console.log(d);
console.log(e);

let perplexed; // perplexed is undefined (no value is assigned)
perplexed + 2;
//undefined
console.log(perplexed)

let price = 2.7;
price.toFixed(2);
//2.70
console.log(price);
// console.log(parseInt(price));
// using parseInt(price) removes the decimals

isNaN(0);
//false
console.log(isNaN(0));

isNaN(1)
//false
console.log(isNaN(1));

isNaN("")
//false
console.log(isNaN(""));

isNaN("string")
console.log(isNaN("string"));
//true

isNaN("0")
console.log(isNaN("0"));
//false

isNaN("1")
console.log(isNaN("1"));
//false
///these are numbers because although the data type is a string the actual content is a number


isNaN("3.145")
console.log(isNaN("3.145"));
//false

isNaN(Number.MAX_VALUE)
console.log(isNaN(Number.MAX_VALUE));
//false

isNaN(Infinity)
console.log(isNaN(Infinity));
//false

isNaN("true")
console.log(isNaN("true"));
//true

isNaN(true)
console.log(isNaN(true));
//false

isNaN("false")
console.log(isNaN("false"));
//true

isNaN(false)
console.log(isNaN(false));
  //false

// to illustrate why the isNaN() function is needed:
console.log(NaN == NaN);
//false, NaN is a falsy value

!true
//false
console.log(!true)

!false
console.log(!false);
//true

!!true
console.log(!!true);
//true

!!false
console.log(!!false);
//false

!!0
//false
console.log(!!-0);

!!1
//true
console.log(!!1)

!!-1
//true
console.log(!!-1)

!!0.1
//true
console.log(!!0.1)

!!"hello"
//true - not an empty string
console.log(!!"hello")

!!""
//false
console.log(!!"")

!!''
console.log(!!'')
//false

!!"false"
console.log(!!"false")
//true

!!"0"
console.log(!!"0");
//true

let sample = "Hello Codeup"
console.log(sample.length)

console.log(sample.toUpperCase());
console.log(sample.toLowerCase());

console.log(sample + " Students")

console.log(sample + " Class")


// sample += " Students"
// console.log(sample)
//
// replace students with class
//let sample = "Hello Codeup Students"
console.log(sample.replace("Students", "Class"))

// console.log("line 153 " + sample.indexOf("C"))
console.log(sample.indexOf("C"))
// capital C returns 6 as position
console.log(sample.indexOf("c"))
// lowercase c returns -1 as position
// this isn't in the sample so it returns -1 because it falls outside of that

//checking index for following question
console.log(sample.indexOf("p"))

// another method
// console.log(sample.substring(sample.indexOf("C"), 1 + sample.indexOf("p")))
console.log(sample.substring(6,12))

//question 3

//$3 per day
//little mermaid 3 days
//brother bear 5 days
//hercules 1 day
//how much will I have to pay? 27

//naming variables always use lowercase for first letter of first world and capital for following words
let p = 3
let little = 3
let bear = 5
let hercules = 1

console.log((little + bear + hercules) * p)
// another method
// let littleCost = little * p;
// let bearCost = bear * p;
// let herculesCost = hercules * price;
// let totalCost = littleCost + bearCost + herculesCost
// console.log(totalCost)

//3b
//Google pays $400 for 6 hours for $2400
//Amazon pays $380 for 4 hours for $1520
// Facebook pays $350 for 10 hours for $3500
// how much will I receive this week? $7420

let g = 400
let ama = 380
let f = 350
console.log((g * 6) + (ama * 4) + (f * 10))
// additional variables
let gHours = 6
let amaHours = 4
let fHours = 10

let totalPay = (g * gHours) + (ama * amaHours) + (f * fHours)
console.log(totalPay)
//template literal version of the same result
console.log(`Your total pay is ${totalPay}`)


//4

let username = 'codeup';
let password = 'notastrongpassword';

let var1 = password.length>=5
console.log(var1)

//another method
//let notInclude = password !== username;
// console.log(notInclude)

let var2 = !password.includes(username)
console.log(var2)


let var3 = username.length<=20
console.log(var3)

let var4 = (username.trim() === username) && (password.trim() === password);
//i used the following but did not find it correctly
//let var4 = (password + username).includes("")
console.log(var4)
//didn't understand boolean values within a variable at first

