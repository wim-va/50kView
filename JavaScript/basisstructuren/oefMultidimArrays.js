// met dank aan Wouter ;-)

'use strict';
var toetsenbord = require('readline-sync');

// om snel te testen, zonder dat gebruiker vierkant moet invoeren
var rij1 = [16, 3, 2, 13];
var rij2 = [5, 10, 11, 8];
var rij3 = [9, 6, 7, 12];
var rij4 = [4, 15, 14, 1];
var rechthoek = [rij1, rij2, rij3, rij4];
if (magischVierkant(rechthoek)) {
    console.log("Het is een magisch vierkant");
} else {
    console.log("Het is GEEN magisch vierkant");
}

// met vierkant ingevoerd door gebruiker
leesVierkant(rechthoek);
if (magischVierkant(rechthoek)) {
    console.log("De gebruiker voerde een magisch vierkant in");
} else {
     console.log("De gebruiker voerde GEEN magisch vierkant in");
}

function leesVierkant(hoofdTabel){
    if (isVierkant(hoofdTabel)){
          for (var i = 0; i < hoofdTabel.length; i++){
              for (var j = 0; j < hoofdTabel.length; j++){
                  hoofdTabel[i][j] = parseInt(toetsenbord.question("Getal["+i+","+j+"]: "));
              }
          }
    }
}

function isVierkant(hoofdTabel) {
    for (var i = 0; i < hoofdTabel.length; i++) {
        if (hoofdTabel.length != hoofdTabel[i].length) {
            return false;
        }
    }
    return true;
}

function somRij(hoofdTabel, rijNr) {
    var som = 0;
    for (var i = 0; i < hoofdTabel[rijNr].length; i++) {
        som += parseInt(hoofdTabel[rijNr][i]);
    }
    return som;
}

function somKolom(hoofdTabel, kolomNr) {
    var som = 0;
    for (var i = 0; i < hoofdTabel.length; i++) {
        som += parseInt(hoofdTabel[i][kolomNr]);
    }
    return som;
}

function somDiagonaalLinksNaarRechts(hoofdTabel) {
    var som = 0;
    for (var i = 0; i < hoofdTabel.length; i++) { // rijen afgaan
        som += parseInt(hoofdTabel[i][i]);
    }
    return som;
}

function somDiagonaalRechtsNaarLinks(hoofdTabel) {
    var som = 0;
    for (var i = 0; i < hoofdTabel.length; i++) { // rijen afgaan
        som += parseInt(hoofdTabel[i][hoofdTabel.length - i - 1]);
    }
    return som;
}

function magischVierkant(rechthoek) {
    var som;
    if (!isVierkant(rechthoek)) {
        return false;
    } else {
        // controleer of de som van alle rijen gelijk is
        som = somRij(rechthoek, 0);

        for (var i = 1; i < rechthoek.length; i++) {
            if (som !== somRij(rechthoek, i)) { // bereken de som van rij i
                return false;
            }
        }
        // einde controle rijen

        // controleer of de som van alle kolommen gelijk is
        for (var i = 0; i < rechthoek.length; i++) {
            if (som !== somKolom(rechthoek, i)) { // bereken de som van kolom i
                return false;
            }
        }
        // einde controle kolommem   

        // controleer of de som van de diagonalen gelijk is

        if (som != somDiagonaalRechtsNaarLinks(rechthoek)) {
            return false;
        }
        if (som != somDiagonaalLinksNaarRechts(rechthoek)) {
            return false;
        }
    }
    return true;
}
