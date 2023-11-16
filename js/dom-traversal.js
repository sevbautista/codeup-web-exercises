const box1 = document.querySelector('.box1')
const parent = box1.parentElement
console.log(parent)

// .parentElement method
const stateParksUL = document.getElementById('state-parks-texas');
stateParksUL.parentElement.style.backgroundColor = 'lightblue';

// .children method
const stateParksLIs = document.querySelector('#state-parks-texas').children;
for(let i = 0; i < stateParksLIs.length; i++) {
    stateParksLIs[i].style.color = "palevioletred";
    stateParksLIs[2].style.fontWeight = "bold";
    stateParksLIs[1].style.visibility = "hidden";
    stateParksLIs[3].style.fontSize = "50px";
}
// First Element Child, Last Element Child
const nationalParkUL = document.querySelector('#national-parks');
nationalParkUL.firstElementChild.style.color = "palegreen";
nationalParkUL.lastElementChild.style.background = "beige";

// .nextElementSibling method
const nationalParksHeading = document.querySelector("#national-parks-heading");

nationalParksHeading.nextElementSibling.style.background = "salmon";

// div.parent = node

//<div class="parent">...</div> = element