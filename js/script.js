var clickOutput = document.querySelector("#click-output");
var clickBtn = document.querySelector("#click-button");
var input = document.querySelector("#name-input")
var clicks = 0;

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
    var parsed = JSON.parse(rawData) || [];

    return parsed;
}

function saveUserData(arr) {
    var jsonVal = JSON.stringify(arr);

    localStorage.setItem("users", jsonVal);
}

function saveUserClicks(eventObj) {
    if (eventObj.keyCode === 13) {
        var userScore = {
            name: input.value,
            clicks: clicks
        };

        var usersArray = getUserData();
        usersArray.push(userScore);

        saveUserData(usersArray);
        showScores();

        clearData();
    }

}

function showScores() {
    var users = getUserData();
    var scoresDiv = document.querySelector(".scores");
    var div = document.createElement("div");

    scoresDiv.innerHTML = "";

    if (users.length === 0) {
        // div.classList.add("score");

        // var p = document.createElement("p");
        // p.innerText = `No ${userObj.name}s or ${userObj.clicks} Yet!`
        // div.append(p);

        scoresDiv.innerHTML = "";
    }

    for (var userObj of users) {
        div.classList.add("score");

        var h3 = document.createElement("h3");
        h3.innerText = `Name: ${userObj.name}`;
        div.append(h3);

        var p = document.createElement("p");
        p.innerText = `Clicks: ${userObj.clicks}`;
        div.append(p)

        scoresDiv.append(div);
    }
}

clickBtn.addEventListener("click", addClick);
input.addEventListener("keydown", saveUserClicks);

// showScores();
