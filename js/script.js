var input = document.querySelector("#name-input");
// var h3 = document.querySelector("h3");

function getUserInput(eventObj) {
    // eventObj.preventDefault();
    // h3.innerText = input.value
    // console.log(input.value);
    if (eventObj.keyCode === 13) {
        console.log("enter pressed");
    }
}

input.addEventListener("keydown", getUserInput);