'use strict';

var toetsenbord = require('readline-sync');

var i, j, naam, omzet, namen = ["Jan", "Piet", "Joris", "Corneel"];
var omzetten = new Array(namen.length);
omzetten.fill(0);
naam = toetsenbord.question("Geef naam (einde om te stoppen): ");
while (naam != "einde") {
    j = namen.indexOf(naam);
    if (j > -1) {
        omzet = toetsenbord.question("Geef omzet: ");
        omzet = parseInt(omzet);
        omzetten[j] += omzet;
    }
    else {
        console.log("Ongeldige naam.");
    }
    naam = toetsenbord.question("Geef naam (einde om te stoppen): ");
}
for (i = 0; i < namen.length; i++) {
    console.log("%s: %d", namen[i], omzetten[i]);
}