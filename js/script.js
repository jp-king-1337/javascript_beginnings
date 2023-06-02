// ChatGPT generated this with the adjusted prompt: can you provide 4 js arrays - lowercase letters, uppercase, numbers, and special characters? I don't need them as variables, just the array content itself
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specials = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~']
// Example of concatenation.
var combinedArrays = lowercase.concat(uppercase).concat(numbers).concat(specials);


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
    var includeSpecials = confirm("Click OK if you want to include special characters.");

    var output = [amount, includeLowercase, includeUppercase, includeNumbers, includeSpecials];
    return output;
}

var choices = getUserInput();
// console.log(choices);
// alert("Thanks for your input!");



// TASK: Using our choices array, create a function that creates an array of the combined character sets based on the user's choices (hint - conditionals) and generates a resulting random string of characters in the amount chosen by the user. The function will return that generated string.
function generatePass() {
    var pass = "";

    var charAmount = choices[0];
    var includeLowercase = choices[1];
    var includeUppercase = choices[2];
    var includeNumbers = choices[3];
    var includeSpecials = choices[4];
    var chosenCharSets = [];


    if (includeLowercase) {
        chosenCharSets = chosenCharSets.concat(lowercase);
    }
    if (includeUppercase) {
        chosenCharSets = chosenCharSets.concat(uppercase);
    }
    if (includeNumbers) {
        chosenCharSets = chosenCharSets.concat(numbers);
    }
    if (includeSpecials) {
        chosenCharSets = chosenCharSets.concat(specials);
    }


    for (var count = 0; count < charAmount; count++) {
        // Grab a random character from the chosenCharSets array
        var randomNum = Math.random();
        var randomIndex = Math.floor(randomNum * chosenCharSets.length)
        var randomCharacter = chosenCharSets[randomIndex];

        pass += randomCharacter;
    }


    return pass;
}

var pass = generatePass();

console.log(pass);