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


//let price = "2.7";
price.toFixed(2);
//undefined
console.log(price);

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
//false though i'm not entirely sure why

!true
//false
console.log(!true)

!false
console.log(!false);
//true
!!true
console.log(!!true);
//true
console.log(!!true);

!!false
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
//true but not understanding how
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