var body = document.body;
// var btnElObject = document.getElementById("start");
// .getElementById is no longer used, because .querySelector is now the standard.
var btnElObject = document.querySelector("#start");
var mainEl = document.querySelector(".main-content");
var liEl = document.querySelector("ul li:last-child")


// console.log(btnElObject);
// btnElObject.innerText = "something else";
// btnElObject.style.backgroundColor = "#301934";
// btnElObject.style.color = "#fff";
mainEl.style.backgroundColor = "red";


btnElObject.addEventListener("click", function () {
    body.classList.add("explosion");
});























// function getProduct(a, b) {
//     return a * b;
// }

// var product = getProduct(5, 5);

// function doSomething(whatAmI, blah) {
//     whatAmI("arg passed to callback");
//     console.log(blah);
// }

// doSomething(function(youGotThis) {
//     console.log("callback called");
// }, 10);