// Target all the li's in the ul and add an event listener to each li that console logs the innerText of the li

// Target the ul and add an event listener that console logs the innerText of the li tha was clicked

var listItem = document.querySelectorAll("ul li");
var unordList = document.querySelector("ul");

listItem.forEach(function(li) {
    li.addEventListener("click", function() {
        console.log(li.innerText);
    })
});

unordList.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        console.log(event.target.innerText);
    }
});