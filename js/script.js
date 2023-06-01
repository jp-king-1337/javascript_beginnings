// var students = ["John", "FSF", "Jamil", "FSF", "Roman", "FSF"];


// TASK: Use the for loop to call the function and print the full list of students.

// for (var index = 0; index < students.length; index += 2) {
//     printStudentInfo(students[index], students[index + 1]);
// }

// function printStudentInfo(studentName, studentCourse) {
// console.log("Welcome to the class!");
// console.log("Name:", studentName);
// console.log("Course:", studentCourse);
// console.log("Please utilize office hours for help!");
// }



// for (var index = 0; index < students.length; index += 2) {
//     console.log("Name:", students[index]);
//     console.log("Course:", students[index + 1]);
// }

// This is the same thing:
// for (var index = 0; index < students.length; index += 2) {
//     console.log("Name:", students[index]);
//     console.log("Course:", students[index + 1]);

//     index += 1;
// }


// function printStudentInfo(studentName, studentCourse) {
//     // The content in () in that function is a parameter.
//     console.log("Welcome to the class!");
//     console.log("Name:", studentName);
//     console.log("Course:", studentCourse);
//     console.log("Please utilize office hours for help!");
// }

// printStudentInfo(0);
// The 0 is an argument.
// printStudentInfo(students[2], students[3]);


// printStudentInfo(students[0]);
// Equivalent to:
// printStudentInfo("John");


function printStuff(name, age, fruits) {
    var output = "";

    for (var index = 0; index < fruits.length; index++) {
        // console.log(fruits[index]);
        if (index === 0) {
            output += fruits[index];
        } else {
            output += ", " + fruits[index];
        }
    }

    console.log(output);
}


printStuff("JD", 43, ["apple", "orange", "grape"]);



