'use strict';

const MINTRAP = 1, MAXTRAP = 18;
var toetsenbord = require('readline-sync');

function bonusMalus(oudeBonusMalus, aantalOngevallen) {
    var result = parseInt(oudeBonusMalus);
    if (aantalOngevallen == 0) {
        if(oudeBonusMalus > MINTRAP){
            result--;
        }
    }
    else {
        result += 2;
        if (aantalOngevallen > 1) {
            result += 3 * (aantalOngevallen - 1);
        }
        if (result > MAXTRAP) {
            result = MAXTRAP;
        }
    }
    return result;
}

var oudeBonusMalus = toetsenbord.question("huidige B/M: ");
var aantalOngevallen = toetsenbord.question("aantal vergoede ongevallen: ");
var nieuweBonusMalus = bonusMalus(oudeBonusMalus, aantalOngevallen);
console.log("nieuwe B/M: %d", nieuweBonusMalus);
if(nieuweBonusMalus == MAXTRAP){
    console.log("u wordt vriendelijk verzocht een andere verzekeringsmaatschappij te zoeken");
}