var body = document.body;
var btnElObject = document.querySelector("#start");
var mainSectionEl = document.querySelector(".main-content");
var questionData = [
    {
        question: "What does the acronym D.O.M. stand for?",
        choices: ["Dog Only Members", "Document Object Model", "Dancing on Mercury", "Document On Memory"],
        answer: "Document Object Model"
    },
    {
        question: "Should we refer to JavaScript as Java?",
        choices: ["Maybe", "Yes", "No", "Only on Saturdays"],
        answer: "No"
    },
    {
        question: "What is the purpose of DOCTYPE in HTML?",
        choices: ["To specify the version of HTML being used", "To define the document type", "To indicate the character encoding", "To link external stylesheets"],
        answer: "To define the document type"
    },
    {
        question: "What are the different heading tags in HTML?",
        choices: ["h1, h2, h3, h4, h5, h6", "head, title, header", "hgroup, hsection, hdiv", "header, footer, nav"],
        answer: "h1, h2, h3, h4, h5, h6"
    },
    {
        question: "What is the box model in CSS?",
        choices: ["A way to visualize elements as boxes", "A model for positioning elements on the web page", "A method for creating rounded corners", "A way to define font styles"],
        answer: "A model for positioning elements on the web page"
    },
    {
        question: "Explain the difference between classes and IDs in CSS.",
        choices: ["Classes are used for styling HTML elements, IDs are used for JavaScript manipulation", "Classes are unique, IDs can be used multiple times", "Classes can be applied to multiple elements, IDs are unique", "Classes are global, IDs are local"],
        answer: "Classes can be applied to multiple elements, IDs are unique"
    },
    {
        question: "What is the difference between `let`, `const`, and `var` in JavaScript?",
        choices: ["`let` and `const` are block-scoped, `var` is function-scoped", "`let` and `const` are used for constant values, `var` is used for variables", "`let` and `const` are modern JavaScript keywords, `var` is deprecated", "`let` and `const` are used for global variables, `var` is used for local variables"],
        answer: "`let` and `const` are block-scoped, `var` is function-scoped"
    },
    {
        question: "What is the difference between `==` and `===` in JavaScript?",
        choices: ["`==` performs type coercion, `===` does not", "`==` checks for equality, `===` checks for identity", "`==` compares values, `===` compares references", "`==` is for strict equality, `===` is for loose equality"],
        answer: "`==` performs type coercion, `===` does not"
    },
    {
        question: "What is Git?",
        choices: ["A version control system", "A programming language", "A web development framework", "An operating system"],
        answer: "A version control system"
    },
    {
        question: "What is the difference between Git and GitHub?",
        choices: ["Git is used for version control, GitHub is a code hosting platform", "Git is a centralized system, GitHub is a distributed system", "Git is free and open-source, GitHub is a paid service", "Git is used for local development, GitHub is used for remote collaboration"],
        answer: "Git is used for version control, GitHub is a code hosting platform"
    }
]

for (var index = 0; index < questionData.length; index++) {
    var questionObj = questionData[index];
    var questionDiv = document.createElement("div");
    // var h2 = document.createElement("h2");
    // var p = document.createElement("p");

    // h2.innerText = questionObj.question;
    // p.innerText = questionObj.answer;

    // questionDiv.append(h2);
    // questionDiv.append(p);


    questionDiv.innerHTML = `
        <h2>${questionObj.question}</h2 >
        <p>Answer: ${questionObj.answer}</p>
    `;

    mainSectionEl.append(questionDiv);
}


btnElObject.addEventListener("click", function () {
    body.classList.add("explosion");
});























// function getProduct(a, b) {
//     return a * b;
// }

// var product = getProduct(5, 5);

// function doSomething(whatAmI, blah) {
//     whatAmI("arg passed to callback");
//     console.log(blah);
// }

// doSomething(function(youGotThis) {
//     console.log("callback called");
// }, 10);