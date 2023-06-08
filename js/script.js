// Target all the li's in the ul and add an event listener to each li that console logs the innerText of the li

// Target the ul and add an event listener that console logs the innerText of the li tha was clicked

var listItem = document.querySelectorAll("ul li");
var unordList = document.querySelector("ul");
var userAnswer = "Document Object Model"

// listItem.forEach(function(li) {
//     li.addEventListener("click", function() {
//         console.log(li.innerText);
//     })
// });

// MY SOLUTION
// unordList.addEventListener("click", function (ul) {
//     if (ul.target.tagName === "LI") {
//         console.log(ul.target.innerText);
//     }
// });

// JD SOLUTION
function clicked(eventObj) {
    var el = eventObj.target;

    if (el.tagName === "LI") {
        if (el.innerText === userAnswer) {
            console.log("You are correct!");
            el.classList.add("correct");
            alert("You are correct!");
            if (el.innerText === !userAnswer) {
                el.classList.add("wrong");
            }
        } else {
            console.log("Wrong...");
        }
    }
}

unordList.addEventListener("click", clicked)