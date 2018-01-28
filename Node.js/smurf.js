'use strict';

// Node.js voert in het begin van elke module volgende zaken impliciet uit:
// var exports = {};
// var module.exports = exports;

var groteSmurf = {
    hoedKleur: "rood",
    leeftijd:   722,
    zing: function(){
        console.log("lalalalalala");
    }
};

module.exports = groteSmurf;

// Node.js definieert impliciet een functie require
//function require(){
// return module.exports;
// }