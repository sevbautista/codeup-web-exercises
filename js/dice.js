"use strict";



import randomNum from "./number-utils.js";

function rollD6(){
    return randomNum(1, 6);
}

function rollD20(){
    return randomNum(1, 20);
}

console.log(rollD6());
console.log(rollD20());


export { rollD6, rollD20 };