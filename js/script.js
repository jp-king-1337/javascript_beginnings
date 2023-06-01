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

// Prints lowercase followed by uppercase followed by numbers
// var combined = lowercase.concat(uppercase).concat(numbers);
// console.log(combined);

// var amount = 50;
// var random = Math.random();
// var ranIndex = Math.floor(random * lowercase.length);

// console.log(lowercase[ranIndex]);


// TASK: given an amount, loop that amount of times to build a string of random letters from that array
var amount = 50;
var output = "";

for (var index = 0; index < amount; index++) {
    var random = Math.random();
    var ranIndex = Math.floor(random * lowercase.length);
    output += lowercase[ranIndex];
}

console.log(output);
