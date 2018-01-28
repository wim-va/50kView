'use strict';

var toetsenbord = require('readline-sync');

function geslacht(rrn) {
    var volgnr = rrn.charAt(9);
    return volgnr % 2 == 0 ? "vrouw" : "man";
}

function geboorteJaarInVierCijfers(rrn) {
    var geboorteDatumEnVolgnr = rrn.substr(0, 6) + rrn.substr(7, 3);
    var geboorteJaar = parseInt(rrn.substr(0, 2));
    var controleCijfers = parseInt(rrn.substr(11, 2));
    var controleCijfersVoor2000 = 97 - (geboorteDatumEnVolgnr % 97);
    if (controleCijfers == controleCijfersVoor2000) {
        return 1900 + geboorteJaar;
    }
    return 2000 + geboorteJaar;
}

function leeftijd(rrn) {
    var vandaag = new Date();
    var huidigeDag = vandaag.getDate();
    var huidigeMaand = vandaag.getMonth() + 1;
    var huidigJaar = vandaag.getFullYear();
    var geboorteJaar = geboorteJaarInVierCijfers(rrn);
    var geboorteMaand = parseInt(rrn.substr(2, 2));
    var geboorteDag = parseInt(rrn.substr(4, 2));
    var geboorteGetal = geboorteJaar * 10000 + geboorteMaand * 100 + geboorteDag;
    var vandaagGetal = huidigJaar * 10000 + huidigeMaand * 100 + huidigeDag;
    return Math.floor((vandaagGetal - geboorteGetal) / 10000);
}

function isGeldigeDatum(datum) {
    var jaartal = "\\d{2}";
    var maandenMet31Dagen = "(0[13578]|1[02])(0[1-9]|[12]\\d|3[01])";
    var maandenMet30Dagen = "(0[469]|11)(0[1-9]|[12]\\d|30)";
    var februari = "02(0[1-9]|1\\d|2[0-8])";
    var expressie = new RegExp("^" + jaartal +
        "((" + maandenMet31Dagen + ")|(" + maandenMet30Dagen + ")|(" + februari + "))$");
    return expressie.test(datum);
}

function isGeldigRijksregisternummer(rrn) {
    var expressie = /^\d{6}-\d{3}-\d{2}$/;
    return expressie.test(rrn) && isGeldigeDatum(rrn.substr(0, 6));
}

var rijksregisterNummer = toetsenbord.question("rijksregisternummer: ");
if (isGeldigRijksregisternummer(rijksregisterNummer)) {
    console.log("Deze persoon is een %s", geslacht(rijksregisterNummer));
    console.log("Deze persoon is %d jaar", leeftijd(rijksregisterNummer));
}
else {
    console.log("Dit is geen geldig rijksregisternummer");
}