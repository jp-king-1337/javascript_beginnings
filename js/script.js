// // var students = ["John", "FSF", "Jamil", "FSF", "Roman", "FSF"];


// // TASK: Use the for loop to call the function and print the full list of students.

// // for (var index = 0; index < students.length; index += 2) {
// //     printStudentInfo(students[index], students[index + 1]);
// // }

// // function printStudentInfo(studentName, studentCourse) {
// // console.log("Welcome to the class!");
// // console.log("Name:", studentName);
// // console.log("Course:", studentCourse);
// // console.log("Please utilize office hours for help!");
// // }



// // for (var index = 0; index < students.length; index += 2) {
// //     console.log("Name:", students[index]);
// //     console.log("Course:", students[index + 1]);
// // }

// // This is the same thing:
// // for (var index = 0; index < students.length; index += 2) {
// //     console.log("Name:", students[index]);
// //     console.log("Course:", students[index + 1]);

// //     index += 1;
// // }


// // function printStudentInfo(studentName, studentCourse) {
// //     // The content in () in that function is a parameter.
// //     console.log("Welcome to the class!");
// //     console.log("Name:", studentName);
// //     console.log("Course:", studentCourse);
// //     console.log("Please utilize office hours for help!");
// // }

// // printStudentInfo(0);
// // The 0 is an argument.
// // printStudentInfo(students[2], students[3]);


// // printStudentInfo(students[0]);
// // Equivalent to:
// // printStudentInfo("John");


// function printStuff(name, age, fruits) {
//     var output = "";

//     for (var index = 0; index < fruits.length; index++) {
//         // console.log(fruits[index]);
//         if (index === 0) {
//             output += fruits[index];
//         } else {
//             output += ", " + fruits[index];
//         }
//     }

//     console.log(output);
// }

// printStuff("JD", 43, ["apple", "orange", "grape"]);


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

var random = Math.random();
var ranIndex = Math.floor(random * lowercase.length);

console.log(lowercase[ranIndex]);
