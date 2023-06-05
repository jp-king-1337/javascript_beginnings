


// console.log(window);


// setInterval(function() {
//     console.log("Run this code.");
// }, 1000)


function myFunc(one, two, callback) {
    // function myFunc(parameter1, parameter2, parameter3)
    callback("some callback argument");
}

myFunc(10, "some st", function (blah) { console.log(blah) });
// myFunc(argument1, argument2, argument3)
// argument3 = function (parameter) { console.log(parameter)}

// myFunc is the main function call
// We pass through 3 arguments. The third is the anonymous function.
// The third argument is passed into myFunc as the third parameter.
// The function (str) { console.log(str) }) is now equal to     callback("some callback argument");

