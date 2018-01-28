'use strict';
var toetsenbord = require('readline-sync');

var woordFrequenties = [];
var zin = toetsenbord.question('Tik een zin in: ');
var woorden = zin.split(" ");
var woord;
for(var i=0; i < woorden.length; i++){
    woord = woorden[i].toUpperCase();
    if(woordFrequenties[woord] == null){
        woordFrequenties[woord] = 1;
    }
    else{
        woordFrequenties[woord]++;
    }
}
console.log("Aantal woorden in de zin: %d", woorden.length);
console.log("Aantal karakters in de zin: %d", zin.length);
console.log("Dit zijn de woorden en hun frequenties:");
for(var woord in woordFrequenties){
    console.log("%s: %d ", woord, woordFrequenties[woord]);
}