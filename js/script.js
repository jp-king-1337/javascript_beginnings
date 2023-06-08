var formEl = document.querySelector("#user-form");
var emailInput = document.querySelector("#email-input");
var passInput = document.querySelector("#pass-input");


function getUserInput(eventObj) {
    eventObj.preventDefault();

    var email = emailInput.value;
    var pass = passInput.value;

    console.log(email, pass);

}

formEl.addEventListener("submit", getUserInput);














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