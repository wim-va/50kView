'use strict';
var toetsenbord = require('readline-sync');

var postnrs = [];
var gemeente = toetsenbord.question('Gemeente? ').toUpperCase();
var postnr;
while(gemeente != 'STOP'){
    if(postnrs[gemeente]){
        console.log("Het postnummer van %s is %s", gemeente, postnrs[gemeente]);
    }
    else{
         postnrs[gemeente] = toetsenbord.question("Gemeente niet gevonden.  Postnummer? ");
    }
    gemeente = toetsenbord.question('gemeente: ').toUpperCase();
}
console.log('Overzicht gemeentes:');
for(gemeente in postnrs){
    console.log('%s %s', postnrs[gemeente], gemeente);
}