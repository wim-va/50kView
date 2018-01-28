'use strict';

var toetsenbord = require('readline-sync');

var i, j, naam, omzet, namen = ["Jan", "Piet", "Joris", "Corneel"];
var omzetten = new Array(namen.length);
/*
for (var i = 0; i < omzetten.length; i++) {
    omzetten[i] = 0;
}
*/
// korter:
omzetten.fill(0);

naam = toetsenbord.question("Geef naam (einde om te stoppen): ");
while (naam != "einde") {
    omzet = toetsenbord.question("Geef omzet: ");
    omzet = parseInt(omzet);
    j = namen.indexOf(naam);
    omzetten[j] += omzet;
    naam = toetsenbord.question("Geef naam (einde om te stoppen): ");
}
for (i = 0; i < namen.length; i++) {
    console.log("%s: %d", namen[i], omzetten[i]);
}
