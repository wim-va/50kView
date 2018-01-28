'use strict';

// een javascript object literal
// javascript objecten kunnen properties (gegevens) en methodes (functies) hebben
var javascriptSmurf = {
    naam: "Grote Smurf", adres: "Grote paddestoel", woonplaats: "Smurfendorp",
    getGegevens: function () {
        return this.naam + "  woont in " + this.adres + " in " + this.woonplaats;
    }
};
console.log(javascriptSmurf.getGegevens());

// een JSON object
// JSON objecten hebben properties.  De namen van de properties staan tussen aanhalingstekens.
// JSON objecten hebben GEEN methodes.
var jsonSmurf = { "naam": "Brilsmurf", "adres": "Kleine paddestoel", "woonplaats": "Smurfendorp" };
// we kunnen met JSON objecten werken zoals met "gewone" javascript objecten:
console.log(jsonSmurf.naam);
jsonSmurf.naam = "Moppersmurf";
console.log(jsonSmurf.naam);

// JavaScript object -> JSON object string
var jsonSmurf2 = JSON.stringify(javascriptSmurf);
console.log(jsonSmurf2);  // merk op: jsonSmurf2 heeft GEEN methode getGegevens

// JSON object string -> JavaScript object
var javascriptSmurf2 = JSON.parse(jsonSmurf2);
console.log(javascriptSmurf2);
var jsonSmurfAlsString = '{ "naam": "Brilsmurf", "adres": "Kleine paddestoel", "woonplaats": "Smurfendorp" }';
javascriptSmurf2 = JSON.parse(jsonSmurf2);
console.log(javascriptSmurf2);
console.log(javascriptSmurf2.adres);

// nog een voorbeeld
var strip1 = { titel: "De zwarte smurfen", jaar: 1963 };
var strip2 = { titel: "De smurfin", jaar: 1967 };
var strip3 = { titel: "De leerling smurf", jaar: 1971 };
var strip4 = { titel: "Smurfvoetbal", jaar: 2016 };
var strips = [strip1, strip2, strip3, strip4];
console.log( JSON.stringify(strips) );

var persoonMetStrips = {
    voornaam: "Joske",
    naam: "Vermeulen",
    strips: strips,
    volledigeNaam: function () {
        return this.voornaam + " " + this.naam;
    }
};
console.log( JSON.stringify(persoonMetStrips) );
