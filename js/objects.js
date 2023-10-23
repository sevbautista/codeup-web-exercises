(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    const person =
        {
        firstName: "Sev",
        lastName: "Bautista",
        }
    const { firstName, lastName} = person;

    console.log(person.firstName + " " + person.lastName);

    //josh's example
    const person1= {}
    person1.firstName = "Rick"
    person1.lastName = "Sanchez"
    console.log(person1.firstName)
    console.log(person1.lastName)
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
const   sayHello = "Hello from"
    console.log(`${sayHello} ${person.firstName} ${person.lastName}!`);

//josh's example
    person.sayHello = function () {
        return `Hello from ${person.firstName} ${person.lastName}`
    }
    console.log(person.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */


    let shoppers = [
        {name: 'Cameron', amount: 180},//no discount
        {name: 'Ryan', amount: 250},//30
        {name: 'George', amount: 320}//38.4
    ];

let discount = .12;
let discountMinimum = 200
let totalPaid = shoppers.amount * discount
    if (shoppers.amount >= discountMinimum) {
        shoppers.amount * discount
    // } else if (shoppers.amount < discountMinimum) {
    }
shoppers.forEach(shoppers => console.log (`${shoppers.name} spent ${shoppers.amount} and got a discount of ${discount} and paid ${totalPaid}`));


    // Josh's Example
    shoppers.forEach(function (shopper) {
        let discount;
        let total;
        if(shopper.amount > 200){
        discount = shopper.amount * .12;
        total = shopper.amount - discount;
        console.log("Hello " + shopper.name + " your discount was $" + discount + ". Your new total is $" + total);
        } else{
        console.log("Hello " + shopper.name + ", your total is $" + shopper.amount)
        }
    })

    //Anthony's Example
    // shoppers.forEach(function (shopper) {

        // let name = shopper.name;
        // let amount = shopper.amount;
        // let discount =0;
        //
        // if (amount > 200){
        // discount = amount * .12)
        // }}




        /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    const books = [
        {
            bookTitle: "A star made of styrofoam",
            author: {
                firstName: "Brittle",
                lastName: "Makemess"
            }
        },
        {

            bookTitle: "'Who ate my house?' and Other Mysteries",
            author: {
                firstName: "Fuller",
                lastName: "St. Arvey"
            }
        },
        {

            bookTitle: "Paybacker 2: The Revengening",
            author: {
                firstName: "Noel",
                lastName: "Mercy"
            }
        },
        {

            bookTitle: "The Many Delectable Disguises of Darwin Burrito",
            author: {
                firstName: "Ima",
                lastName: "Realburrito"
            }
        },
        {

            bookTitle: "A Really Well Written Book",
            author: {
                firstName: "Shortcut",
                lastName: "Taker"
            }
        },
];

    console.log("=======")
    console.log(`${books[0].bookTitle} by ${books[0].author.firstName} ${books[0].author.lastName}`)
    console.log(`${books[1].bookTitle} by ${books[1].author.firstName} ${books[1].author.lastName}`)
    console.log(`${books[2].bookTitle} by ${books[2].author.firstName} ${books[2].author.lastName}`)
    console.log(`${books[3].bookTitle} by ${books[3].author.firstName} ${books[3].author.lastName}`)
    console.log(`${books[4].bookTitle} by ${books[4].author.firstName} ${books[4].author.lastName}`)
    // console.log(books[0].bookTitle.indexOf)

// let index = books.bookTitle.indexOf()
//      console.log(index)
// console.log(books[1].indexOf)
//     books.forEach ((book) => console.log(`${bookTitle}${firstName} ${lastName}`))
//     for (book of books){
//         console.log(book)
//     }
    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

// books.forEach(book => console.log(`${bookTitle}${firstName} ${lastName}`))
// console.log(book)

    //josh's example

    for(let i = 0; i <books.length; i++){
        console.log("Book #" + (i + 1));
        console.log("Title: " + books[i].bookTitle);
        console.log("Author " + books[i].author.firstName + " " + books[i].author.lastName);
        console.log("---");
    }


    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    //Josh's example
    function creatBook(title, firstName, lastName) {
        let book = {
            title: title,
            author: {
                firstName: firstName,
                lastName: lastName

            }

        }
        return book;
    }

    books.push(creatBook("The Great Dawn", "Rance", "Lindlson"))
    function showBookInfo(books, bookNum) {
        console.log("Book #" + (bookNum));
        console.log("Title: " + books.bookTitle);
        console.log("Author " + books.author.firstName + " " + books.author.lastName);
        console.log("---");
    }
    for(let i = 0; i <books.length; i++){
        showBookInfo(books[i], (i + 1));
    }
})();
