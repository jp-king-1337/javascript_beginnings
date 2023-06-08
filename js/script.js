var clickOutput = document.querySelector("#click-output");
var clickBtn = document.querySelector("#click-button");
var input = document.querySelector("#name-input")
var clicks = 0;

// TASK: Create a function that increases clicks each time the button is pressed and outputs the click amount to the window.

// BASIC:
// Store the user name and click amount to localStorage
// ADVANCED:
// Store an array of objects. Each object will represent the user that entered their name and the amount of clicks they performed
// When the user enters their name, you’ll grab the array, add a user object to it and then replace the old array with the new array

function addClick() {
    // Increase clicks by one
    clicks++;

    // Output clicks to the h1
    clickOutput.innerText = "Clicks: " + clicks;

    return clicks;
}

function saveUserClicks(eventObj) {
    if (eventObj.keyCode === 13) {
        localStorage.a
    }
}

clickBtn.addEventListener("click", addClick);
input.addEventListener("keydown", saveUserClicks);


