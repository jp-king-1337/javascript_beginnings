// ChatGPT generated this with the prompt: can you provide 4 js arrays - lowercase letters, uppercase, numbers, and special characters? 
// var lowercaseLetters = Array.from({length: 26}, (_, index) => String.fromCharCode(97 + index));
// // Output: ['a', 'b', 'c', ..., 'x', 'y', 'z']

// var uppercaseLetters = Array.from({length: 26}, (_, index) => String.fromCharCode(65 + index));
// // Output: ['A', 'B', 'C', ..., 'X', 'Y', 'Z']

// var numbers = Array.from({length: 10}, (_, index) => String.fromCharCode(48 + index));
// // Output: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

// var specialCharacters = ['!', '@', '#', '$', '%', '&', '*'];
// // Output: ['!', '@', '#', '$', '%', '&', '*']



// ChatGPT generated this with the adjusted prompt: can you provide 4 js arrays - lowercase letters, uppercase, numbers, and special characters? I don't need them as variables, just the array content itself
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~']
// Example of concatenation.
var combinedArrays = lowercase.concat(uppercase).concat(numbers).concat(specialCharacters);


// These are synchronous. One prompt cannot move on until it is complete.
// var amount = Number(prompt("Please provide an amount."));
// var includeLowercase = confirm("Click OK if you want lowercase letters.");
// var includeUppercase = confirm("Click OK if you want uppercase letters.");

// TASK: create a function that gets the amount of chars and returns a list of the amount and booleans for each of the character sets (charsets).
function getUserInput() {
    var amount = Number(prompt("Please provide an amount."));
    var includeLowercase = confirm("Click OK if you want to include lowercase letters.");
    var includeUppercase = confirm("Click OK if you want to include uppercase letters.");
    var includeNumbers = confirm("Click OK if you want to include numbers.");
    var includeSpecialCharacters = confirm("Click OK if you want to include special characters.");

    var output = [amount, includeLowercase, includeUppercase, includeNumbers, includeSpecialCharacters];
    return output;
}

var choices = getUserInput();
console.log(choices);

alert("Thanks for your input!");



// TASK: Using our choices array, create a function that creates an array of the combined character sets based on the user's choices (hint - conditionals) and generates a resulting random string of characters in the amount chosen by the user. The function will return that generated string.
function generatePass() {
    var combinedChars = [];
    var password = "";

    // Add the chosen charsets to our combined array.
    var includeLowercase = choices[1];
    var includeUppercase = choices[2];
    var includeNumbers = choices[3];
    var includeSpecialCharacters = choices[4];

    // Conditionally check each boolean to determine if we add to the array.
    if (includeLowercase) {
        combinedChars = combinedChars.concat(lowercase);
    }

    if (includeUppercase) {
        combinedChars = combinedChars.concat(uppercase)
    }

    if (includeNumbers) {
        combinedChars = combinedChars.concat(numbers);
    }

    if (includeSpecialCharacters) {
        combinedChars = combinedChars.concat(specialCharacters);
    }

    for (var count = 0; count < choices[0]; count++) {
        var randomIndex = Math.floor(Math.random() * combinedChars.length);

        password += combinedChars[randomIndex];
    }

    return password
}

var pass = generatePass();
console.log(pass);





// function sum(a, b) {
//     return a + b;
// }

// var result = sum(5, 10);

// console.log(result);