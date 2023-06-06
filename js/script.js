var body = document.body;
var btnElObject = document.getElementById("start");

document.body.children[1].children[0].children[0];

// console.log(btnElObject);
// btnElObject.innerText = "something else";
// btnElObject.style.backgroundColor = "#301934";
// btnElObject.style.color = "#fff";

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