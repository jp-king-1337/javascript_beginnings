var formEl = document.querySelector("#user-form");
var input = document.querySelector("#name-input");

function getUserInput(eventObj) {
    // eventObj.preventDefault();
    if (eventObj.keyCode === 13) {
        console.log("enter pressed");
    }
}

input.addEventListener("keydown", getUserInput);

formEl.addEventListener("submit", function (eventObj) {
    eventObj.preventDefault();
});