// Target all the li's in the ul and add an event listener to each li that console logs the innerText of the li

// Target the ul and add an event listener that console logs the innerText of the li tha was clicked

// var listItem = document.querySelectorAll("ul li");
var unordList = document.querySelector("ul");

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
    var ignore = el.classList.contains("not-me");

    if (!ignore) {
        console.log("Clicked!");
    }
}

unordList.addEventListener("click", clicked)