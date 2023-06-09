var clickOutput = document.querySelector("#click-output");
var clickBtn = document.querySelector("#click-button");
var input = document.querySelector("#name-input")
var clicks = 0;

var users = localStorage.getItem("users");
var jsVal = JSON.parse(users);
console.log(jsVal)


// BASIC:
// Store the user name and click amount to localStorage
// ADVANCED:
// Store an array of objects. Each object will represent the user that entered their name and the amount of clicks they performed
// When the user enters their name, you’ll grab the array, add a user object to it and then replace the old array with the new array

function addClick() {
    clicks++;

    clickOutput.innerText = "Clicks: " + clicks;

    return clicks;
}

function clearData() {
    input.value = "";
    clicks = 0;
    clickOutput.innerText = "Clicks: 0";
}

function getUserData() {
    var rawData = localStorage.getItem("users");
    var parsed = JSON.parse(rawData);

    return parsed;
}

function saveUserClicks(eventObj) {
    if (eventObj.keyCode === 13) {
        var userScore = {
            name: input.value,
            clicks: clicks
        };

        var jsonVersion = JSON.stringify([userScore]);
        localStorage.setItem("users", [jsonVersion]);

        clearData();
    }

}

clickBtn.addEventListener("click", addClick);
input.addEventListener("keydown", saveUserClicks);


