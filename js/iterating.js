(function () {
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    const names = ['Sev', 'Alex', 'Claire', 'Rhonda'];
    console.log(names)
    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    console.log(`line 15: ${names.length}`);
    console.log(`There are ${names.length} names in the array.`)
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    console.log(names[0])
    console.log(names[1])
    console.log(names[2])
    console.log(names[3])
    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    for (let i = 0; i < names.length; i++) {
        console.log('Name at index ' + i + ' is ' + names[i]);
    }
    console.log("=======")

    for (let i = 0; i < names.length; i++) {
        console.log(`Name at index ${i}  is ${names[i]}`);
    }
    console.log("=======")

    for (let i = 0; i < names.length; i++) {
        console.log(names[i]);
    }
    console.log("=======")

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

    //forEach loop with arrow function
    names.forEach(name => console.log(`name: ${name}.`));

    //forEach loop
    names.forEach(function (name) {
        console.log(name);
    })

    //forEach loop using of
    for (let name of names) {
        console.log(name)
    }


    console.log("=======")

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    const colors = ['red', 'blue', 'orange', 'grey', 'black'];
    const words = ['face', 'scare', 'thing', 'shirt']

    function first(name) {
        console.log(name[0])
    }

    first(names);

    function second(color) {
        console.log(color[1])
    }

    second(colors);

    function last(arrParam) {
        let wordy = arrParam.reverse();
        console.log(wordy[0]);
    }

    last(words);

    console.log("=======")

    // function last(name) {
    //     let namee = name.reverse()
    //     console.log(namee[0]);
    // }
    //
    // last(names);


    function last(name) {
        return name[name.length -1];

    }
    console.log(last(names))
    //
    // function last(name) {
    //     console.log(name[name.length - 1]);
    // }
    //
    // last(names);
    //
    // console.log(colors[colors.length - 1]);
    // console.log(colors[0]);
    //


})();
