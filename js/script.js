// var link = document.querySelector("#link");
var div = document.querySelector("div");

function triggered(eventObj) {
    if (eventObj.target.tagName === "BUTTON") {
        console.log(eventObj.target);
    }
}

div.addEventListener("click", triggered);






// function stopTheDefault(eventObj) {
//     eventObj.preventDefault();

//     eventObj.target.innerText = "Something Else";
// }

// link.addEventListener("click", stopTheDefault);