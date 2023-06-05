// var fruits = ["apple", "grape", "kiwi"];


var users = [
    {
        name: "JD",
        age: 43
    },
    {
        name: "Jane",
        age: 35
    },
    {
        name: "Bob",
        age: 99
    },
]

console.log(users[1]);






var oldStudentData = ["Matthew", "FSF"];
var studentData = {
    name: "Matthew",
    course: "FSF",
    university: "Rutgers",
    location: "New Jersey",
    age: 26,
    someFunc: function () {
        console.log("Wait, what?!");
    },
    printInfo: function () {
        console.log("Name: ", this.name);
    }
};


studentData.printInfo();