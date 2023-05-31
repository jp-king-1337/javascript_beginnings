var students = ["John", "FSF", "Jamil", "FSF", "Roman", "FSF"];




for (var index = 0; index < students.length; index += 2) {
    console.log("Name:", students[index]);
    console.log("Course:", students[index + 1]);
}

// This is the same thing:
// for (var index = 0; index < students.length; index += 2) {
//     console.log("Name:", students[index]);
//     console.log("Course:", students[index + 1]);

//     index += 1;
// }
