// bron: w3schools.com 
'use strict';
function findMax() {
    // binnen elke functie is arguments een array met de doorgegeven argumenten
    console.log("We zijn op zoek naar het max van");
    console.log(arguments);
    var i, max = 0;
    for (i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}

var x = findMax(4, 5, 6);
console.log(x);
console.log( findMax(99,98,97,62,31,58) );