'use strict';

var toetsenbord = require('readline-sync');

var lijst = new Array();
var naam;
for (var i = 0; i < 5; i++) {
    naam = toetsenbord.question("Geef een naam: ");
    if (lijst[naam] == null) lijst[naam] = 0;
    lijst[naam]++;
}
for (naam in lijst) {  // overloop alle indexen
    console.log("%s komt %d keer voor.", naam, lijst[naam]);
}