var formEl = document.querySelector("#user-form");
var emailInput = document.querySelector("#email-input");
var passInput = document.querySelector("#pass-input");
var emailOutput = document.querySelector("#user-email");
var passOutput = document.querySelector("#user-pass");


// Retrieve the user data from localStorage
function getUserData() {
    var data = {}

    data.email = localStorage.getItem("email-address");
    data.password = localStorage.getItem("password-value");

    return data;
}


// Outputs the user info to the window
function showUserData() {
    var userData = getUserData();

    emailOutput.innerText = `Email: ${userData.email}`;
    passOutput.innerText = `Password: ${userData.password}`;
}


function getUserInput(eventObj) {
    eventObj.preventDefault();

    var email = emailInput.value;
    var pass = passInput.value;

    localStorage.setItem("email-address", email);
    // email-address is the key, email is the value
    localStorage.setItem("password-value", pass);
}

// Initial process or app start tasks
formEl.addEventListener("submit", getUserInput); showUserData();














// var emailInput = document.querySelector("#email-input");

// function getUserInput(eventObj) {
//     // eventObj.preventDefault();
//     if (eventObj.keyCode === 13) {
//         console.log("enter pressed");
//     }
// }

// emailInput.addEventListener("keydown", getUserInput);

// formEl.addEventListener("submit", function (eventObj) {
//     eventObj.preventDefault();
// });