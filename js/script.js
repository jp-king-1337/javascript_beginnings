var students = ["John", "FSF", "Jamil", "FSF", "Roman", "FSF"];


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


function printStudentInfo() {
    console.log("Welcome to the class!");
    console.log("Name:", students[0]);
    console.log("Course:", students[1]);
    console.log("Please utilize office hours for help!");
}

printStudentInfo ()