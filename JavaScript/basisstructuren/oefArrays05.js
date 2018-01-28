'use strict';

var toetsenbord = require('readline-sync');
var namen = new Array(10);
var naam = toetsenbord.question("naam: ");
var aantal = 0;
var gezocht;

while(aantal < 10 || naam != ""){
    if(naam != ""){
        namen[aantal++] = naam;
    }
    naam = toetsenbord.question("naam: ");
}
// ter controle:
console.log(namen);
gezocht = parseInt(toetsenbord.question("positie gezochte naam (vanaf 1): "));
if (gezocht <= namen.length){
console.log("De naam op positie %d is %s", gezocht, namen[gezocht-1]);
}
else{
    console.log("Zoveel namen zijn er niet");
}
