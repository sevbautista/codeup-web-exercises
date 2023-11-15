'use strict';


let colors = ['red', 'green', 'blue', 'yellow', 'palevioletred'];
const delay = 1000;
const newPic = document.getElementById("profile-pic")
const newName = document.getElementById("profile-name")
const newDesc = document.querySelector("p");
const newCard = document.getElementById("profile-card");

let intervalId = setTimeout(function () {
    setInterval(function () {
        newPic.setAttribute("src", "img/dogface.jpg")
    }, delay);
    setInterval(function () {
        newName.innerHTML = "Sammy Bologna"
    }, delay * 4);
    setInterval(function () {
        newDesc.style.color = "orange";
        newDesc.style.fontFamily = "Work Sans";
    }, delay * 6);
    setInterval(function () {
        newCard.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    }, delay * 2);
}, delay);


// setInterval(() => newPic.setAttribute("src", "img/dogface.jpg"), delay);

// setInterval(() => newName.innerHTML = "Sammy Bologna", delay * 4);

// setInterval(function () {
//     newCard.classList.toggle("newColor");
// }, delay);