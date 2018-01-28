'use strict';

var toetsenbord = require('readline-sync');
var getal1 = parseInt(toetsenbord.question('Tik eerste getal in (grondtal): '));
var getal2 = parseInt(toetsenbord.question('Tik tweede getal in (exponent): '));
var kwad;

/* de volgorde en plaats van de functiedefinities is onbelangrijk */

// functiedefinities
function kwadraat(a){
    var result;  
    // een var die in een functie gedef is, is enkel in de functie gekend
    // => result is niet gedef buiten deze functie
    result = a*a;
    return result;
}

function macht(grondtal, exponent){
    var result=1;
    for(var i = 1; i <= exponent; i++){
        result *= grondtal;
    }
    return result;
}

// kwad = result;  // uitvoeringsfout; want een var die in een functie gedecl is,
// is enkel binnen die functie gekend

// functies oproepen ("gebruiken")
kwad = kwadraat(getal1);
console.log("Het kwadraat van %s is %s",getal1, kwad);
console.log("Het kwadraat van %s is %s", getal1+1,  kwadraat(getal1+1) );  // als argument mag een berekening meegegeven worden

console.log("%s tot de macht %s is %s",getal1, getal2, macht(getal1, getal2));