'use strict';
const AANTAL = 12;
var toetsenbord = require('readline-sync');


function vraagLengtes(tabel) {
    for (var i = 0; i < tabel.length; i++) {
        tabel[i] = parseFloat(toetsenbord.question("lengte: "));
    }
}

function gemiddelde(tabel){
    var som = 0;
    for(var i=0; i < tabel.length; i++){
        som += tabel[i];
    }
    return som/tabel.length;
}

function minimum(tabel){
    var min = tabel[0];
    for(var i=1; i < tabel.length; i++){
        if (tabel[i] < min){
            min = tabel[i];
        }
    }
    return min;
}

var lengtes = new Array(AANTAL);
vraagLengtes(lengtes);
// ter controle
console.log(lengtes);
console.log("de gemiddelde lengte is %d", gemiddelde(lengtes));
var kleinste = minimum(lengtes);
console.log("de lengte van de kleinste student is %d.  Dit is de %de student.",
    kleinste, lengtes.indexOf(kleinste)+1);
