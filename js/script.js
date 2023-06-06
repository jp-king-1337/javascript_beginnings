

function getProduct(a, b) {
    return a * b;
}

var product = getProduct(5, 5);

function doSomething(whatAmI, blah) {
    whatAmI("arg passed to callback");
    console.log(blah);
}

doSomething(function(youGotThis) {
    console.log("callback called");
}, 10);