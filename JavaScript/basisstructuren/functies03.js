'use strict';

// een functie zonder expliciete return
function tekenHuisje() {
    console.log("   *");
    console.log("  * *");
    console.log(" *   *");
    console.log("*******");
    console.log("*     *");
    console.log("*     *");
    console.log("*******");
    // hier staat impliciet    return undefined;
}

// klassikale oef.:
// schrijf een functie om een vierkant met doorgegeven
// zijde te tekenen
function tekenRijtje(zijde) {
    var rijtje = "";
    for (var i = 1; i <= zijde; i++) {
        rijtje = rijtje + "*";
    }
    console.log(rijtje);
}

function tekenVierkant(zijde) {
    for (var i = 1; i <= zijde; i++) {
        tekenRijtje(zijde);  // functie oproepen vanuit een functie
    }
}

tekenHuisje();
console.log();

tekenRijtje(10);
console.log();
tekenVierkant(5);
