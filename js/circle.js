(function () {
    "use strict";

    // create a circle object
    //  let circle = {
    //      radius: 3,

    //property of an object doesn't have parenthesis at the end, methods use parenthesis at end

    //     getArea: function (radius) {
    //         let circumference;
    //         circumference = 2 * Math.PI * radius;
    //
    //         // TODO: complete this method
    //         // hint: area = pi * radius^2
    //         return circumference;
    //         // TODO: return the proper value
    //     },
    //
    //     logInfo: function (doRounding) {
    //         // TODO: complete this method.
    //
    //         // If doRounding is true, round the result to the nearest integer.
    //         // Otherwise, output the complete value
    //
    //         console.log("Area of a circle with radius: " + this.radius + ", is: ");
    //     }
    // };

    // log info about the circle
    // console.log("Raw circle information");
    // circle.logInfo(false);
    // console.log("Circle information rounded to the nearest whole number");
    // circle.logInfo(true);

    // console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    // log info about the circle
    // console.log("Raw circle information");
    // circle.logInfo(false);
    // console.log("Circle information rounded to the nearest whole number");
    // circle.logInfo(true);


    // let circle = {
    //     radius: 3,

    //  getArea: function () {
    //      let area = Math.PI * Math.pow(this.radius, 2);
    //     // return Math.PI * this.radius*2; //commenting out what I put originally that isn't working
    //      return area;
    //      console.log(getArea); //returning the area eliminates needing to console log it...?
    //      // another way would be return Math.PI* Math.pow(circle.radius, 2); or (circle.radius * circle.radius)
    //
    //
    // },
    //     getArea: function () {
    //         let area = Math.PI * Math.pow(this.radius, 2);
    //         return area;
    //     }
    //
    //     logInfo: function (doRounding) {
    //         if (doRounding) {
    //
    //         console.log("Area of a circle with radius: " + this.radius + ", is: " + Math.round(circle.getArea);
    //         // console.log("Area of a circle with radius: " + this.radius + ", is: " + Math.round(circle.getArea);
    //         //if do rounding is true round the result to the nearest integer
    //             } else {
    //             console.log("Area of a circle with radius: " + this.radius + ", is: " + (circle.getArea);
    //             //review how this applies to the rest of the function above and below
    //
    //         }
    // };
    // let circle = {
    //     radius: 3,
    //
    //     getArea: function () {
    //         let area = Math.PI * Math.pow(this.radius, 2);
    //         return area;
    //     },
    //
    //     logInfo: function (doRounding) {
    //         if (doRounding) {
    //             console.log("Area of a circle with radius: " + this.radius + ", is: " + Math.round(this.getArea()));
    //         } else {
    //             console.log("Area of a circle with radius: " + this.radius + ", is: " + this.getArea());
    //         }
    //     }
    // };
    // removed comments to see it clearly, commented out previous
    // review this method and the use of Math.PI/Math.pow and practice with them

    // console.log("Raw circle information");
    // circle.logInfo(false);
    // console.log("Circle information rounded to the nearest whole number");
    // circle.logInfo(true);

    console.log("=======================================================");
    let circle = {
        radius: 5,

        getArea: function () {
            let area = Math.PI * Math.pow(this.radius, 2);
            return area;
        },

        logInfo: function (doRounding) {
            if (doRounding) {
                console.log("Area of a circle with radius: " + this.radius + ", is: " + Math.round(this.getArea()));
            } else {
                console.log("Area of a circle with radius: " + this.radius + ", is: " + this.getArea());
            }
        }
    };
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();