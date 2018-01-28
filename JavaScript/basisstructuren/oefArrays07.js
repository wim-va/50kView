'use strict';
const AANTAL = 10;
var toetsenbord = require('readline-sync');
var getallen = new Array(10);

for(var i=0; i<getallen.length; i++){
    getallen[i] = parseInt(toetsenbord.question("getal: "));
}
// ter controle:
console.log(getallen);

console.log("Dit zijn de even getallen: ")
for(var i=0; i<getallen.length; i++){
    if(getallen[i]%2 == 0){
        console.log(getallen[i]);
    }
}