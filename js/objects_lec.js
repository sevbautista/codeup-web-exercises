"use strict";

//objects

//object - a grouping of data and functionality
//properties - data items contained in an object
// methods - functions on an object

//prototypes 0 allow existing objects to be used as templates to create

// const car = new Object();
// console.log(typeof car);
// "object"

// const car ={}
//
// console.log(typeof car);
// car.make = "Toyota";
//or car["model"] = "Camry"; however you should not use this method because it could be confused with an array

const car = {};
    car.make = "Toyota";
    car.model = "Camry";
    console.log('The car make is ' + car ['make']);
    console.log('The car model is ' + car.model);

//
//Nested Values


const cars = [
    {
        //making an array that holds these object values
        make: "Toyota",
        model: "Camry",
        features: ["Automatic Windows", "Bluetooth connectivity", "GPS Navigation"],
        owner: {
            name: "Jane Doe",
            age: 30
        }
    },
    {
        make: "Honda",
        model: "Accord",
        features: ["Automatic Windows", "Great Gas Mileage", "AM/FM Radio"],
        owner: {
            name: "John Doe",
            age: 31
        }
    }
];
console.log(`The first car is a ${cars[0].make} ${cars[0].model}.`)
console.log(`The owner of the second car is ${cars[1].owner.name}.`);
//.owner.firstName.lastName you would need separate values for the information we are trying to log. For example:
//console.log(`The owner of the second car is ${cars[1].owner.firstName}${cars[1].owner.lastName}.`);
console.log("Here are all the features of all the cars:");
cars.forEach( car => {
    car.features.forEach( feature =>
    console.log(feature) );
})

//Object Destructuring

const person = {name: 'codeup', age: 4 };
const {name, age} = person;
console.log(name);
console.log(age);

car.honk = function() {
    // alert("Honk! Honk!");
};
car.honk();

//this keyword is used more in java than javascript. this just means we're using the object name when working within the function