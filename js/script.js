

var oldStudentData = ["Matthew", "FSF"];
var studentData = {
    name: "Matthew",
    course: "FSF",
    university: "Rutgers",
    location: "New Jersey",
    age: 26,
    someFunc: function() {
        console.log("Wait, what?!");
    },
    printInfo: function() {
        console.log("Name: ", this.name);
    }
};


studentData.printInfo();

// var studentName = students[0];

// var studentCourse = students[1];

// var studentName = studentData.name;
// var studentCourse = studentData.course;

// console.log(studentName, studentCourse);

// console.log(studentName.location);

// var fruits = ["orange", "apple", "grape"];
// var str = "some string";

// console.log(str.length);

// var strData = {
//     value: "some string",
//     length: 11
// }