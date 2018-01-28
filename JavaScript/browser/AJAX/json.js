// vooraf: npm install ajv

'use strict';

// JSON object (niet voorgesteld als string)
var jsonSmurf = { "naam": "Grote Smurf", "adres": "Grote paddestoel", "woonplaats": "Smurfendorp" };
console.log(jsonSmurf.naam, " woont in ", jsonSmurf.adres, " in ", jsonSmurf.woonplaats);

// JSON objecten als strings
var jsonPersoon = '{ "voornaam": "Joske", "naam": "Vermeulen", "lievelingsGetal": 13, "gehuwd": false }';
var jsonArrayMetNamen = '["Karen", "Kristel", "Kathleen"]';
var jsonArrayMetObjecten = '[{"naam": "Karen", "haarkleur": "ros"},{"naam": "Kristel", "haarkleur": "zwart"},{"naam": "Kathleen", "haarkleur": "blond"}]';

// JSON string object -> JavaScript
var persoon = JSON.parse(jsonPersoon);
console.log(persoon);
var arrayMetNamen = JSON.parse(jsonArrayMetNamen);
console.log(arrayMetNamen);
var arrayMetObjecten = JSON.parse(jsonArrayMetObjecten);
console.log(arrayMetObjecten);

// JavaScript -> JSON string object
var strip1 = { titel: "De zwarte smurfen", jaar: 1963 };
var strip2 = { titel: "De smurfin", jaar: 1967 };
var strip3 = { titel: "De leerling smurf", jaar: 1971 };
var strip4 = { titel: "Smurfvoetbal", jaar: 2016 };
var strips = [strip1, strip2, strip3, strip4];
var jsonStrips = JSON.stringify(strips);
console.log(jsonStrips);
var persoonMetStrips = { voornaam: "Joske", 
    naam: "Vermeulen", 
    strips: strips,  
    volledigeNaam: function(){
        return this.voornaam+" "+this.naam;
    }};
console.log(JSON.stringify(persoonMetStrips));

// validatie
var smurfJsonSchema = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "Smurf",
    "description": "Een smurf, wat anders?",
    "type": "object",
    "properties": {
        "naam": {
            "description": "Naam van de smurf",
            "type": "string"
        },
        "adres": {
            "description": "Adres van de smurf",
            "type": "string"
        },
        "woonplaats": {
            "description": "Woonplaats van de smurf",
            "type": "string"
        }
    },
    "required": ["naam"]
}
    ;
var Ajv = require('ajv');
var ajv = new Ajv(); // options can be passed, e.g. {allErrors: true}
var validate = ajv.compile(smurfJsonSchema);
var valid = validate(jsonSmurf);
if (!valid) {
    console.log(validate.errors);
}
else {
    console.log("alles gesmurft!");
}

var jsonSmurfZonderNaam = { "adres": "Kleine paddestoel", "woonplaats": "Smurfendorp" };
valid = validate(jsonSmurfZonderNaam);
if (!valid) {
    console.log(validate.errors);
}
else {
    console.log("alles gesmurft!");
}

var jsonSmurfMetExtraProp = {naam:"Extra Smurf", kenmerk: "mag dit?" };
valid = validate(jsonSmurfMetExtraProp);
if (!valid) {
    console.log(validate.errors);  // ok; extra prop mag
}
else {
    console.log("alles gesmurft!");
}