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


function printStudentInfo(studentName, studentCourse) {
    // The content in () in that function is a parameter.
    console.log("Welcome to the class!");
    console.log("Name:", studentName);
    console.log("Course:", studentCourse);
    console.log("Please utilize office hours for help!");
}

// printStudentInfo(0);
// The 0 is an argument.
printStudentInfo(students[0], students[1]);


// printStudentInfo(students[0]);
// Equivalent to:
// printStudentInfo("John");
