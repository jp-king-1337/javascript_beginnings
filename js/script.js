// var fruits = ["apple", "grape", "kiwi"];


var users = [
    {
        name: "JD",
        age: 43
    },
    {
        name: "Jane",
        age: 35,
        hobbies: ["tennis", "hiking"]
    },
    {
        name: "Bob",
        healthcare: {
            locations: {
                pharmacy: "555 Cool St.",
                emergency: "555 Help Dr.",
            },
            medications: {
                amount: 50,
                types: [
                    {
                        bloodPressure: "Amlodapine",
                        pillSize: "10mg"
                    },
                    {
                        painRelief: "Tylenol",
                        pillSize: "500mg"
                    }
                ]
            }
        },
        age: 99
    },
]

// console.log(users[2].healthcare.medications.types[1].pillSize);
// console.log(users[1].name)
// users[1] is the object - followed by a . - followed by a key
// console.log(users[1].hobbies[1]);
// goes deeper - you can dig as deep in as necessary with this method
// console.log(users[2].healthcare.medications.types.bloodPressure);
// it can go all the way down as long as you reference the right object and key


var jd = {
    name: "JD",
    age: 43,
    hobbies: ["pickleball", "fishing"],
    haveBirthday: function () {
        this.age++;
        // console.log(this.age);
        // this doesn't point to the variable that = this object, it points directly to the object itself, allowing you to change the variable name
    },
    printSomething: function (txt) {
        console.log(txt);
    },
    printAge: function () {
        console.log(this.age);
    },
    printHobbiesByIndex: function(index) {
        console.log(this.hobbies[index]);
        // starts at this (the parent object), references the hobbies property, then grabs an item by the index number specified when we call the function
    }
}

var un = {
    something: ["apple", "orange"]
};

console.log(un.blah);


// jd.haveBirthday();
// we have to call the object js and then the function










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


// studentData.printInfo();