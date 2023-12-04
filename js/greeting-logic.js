"use strict";

import randomNumber from "./number-utils.js";


const greetings =
    [
        "Hello",
        "Hi",
        "Hey there",
        "Greetings",
        "Salutations",
        "Howdy",
        "Yo",
        "Bonjour",
        "Hola",
        "Ciao",
        "Namaste",
        "G'day",
        "What's up",
        "Sup",
        "How's it going",
        "Nice to meet you",
        "Welcome",
        "Hey",
        "How are you",
        "Pleased to meet you"
    ];

export default function randomGreeting() {
    return greetings[randomNumber(0,greetings.length-1)]

}
// const randomGreeting = () => greeting[randomNumber(0, greetings.length -1)]
// console.log(randomGreeting())


// export default {randomGreeting}
