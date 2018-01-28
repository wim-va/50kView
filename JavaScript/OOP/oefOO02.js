'use strict';

function Werknemer(naam) {
    this.naam = naam;
    this.werkuren = [0, 0, 0, 0, 0];
}

Werknemer.prototype.wijzigWerkuren = function (dag, uren) {
    this.werkuren[dag - 1] = uren;
}

Werknemer.prototype.werkurenPerWeek = function () {
    var som = 0;
    for (var i = 0; i < this.werkuren.length; i++) {
        som += this.werkuren[i];
    }
    return som;
}

Werknemer.prototype.aantalOveruren = function () {
    var overuren = this.werkurenPerWeek() - 37;
    return overuren > 0 ? overuren : 0;

}

var toetsenbord = require('readline-sync');
var naam = toetsenbord.question("Naam werknemer: ");
var werknemer = new Werknemer(naam);
for (var i = 1; i <= werknemer.werkuren.length; i++) {
    var uren = +toetsenbord.question("Werkuren voor dag " + i + ": ");
    werknemer.wijzigWerkuren(i, uren);
}
console.log(werknemer);
console.log("%s heeft deze week %d uren gewerkt.", werknemer.naam, werknemer.werkurenPerWeek());
console.log("Dit betekent dat hij/zij %d overuren gepresteerd heeft.",
    werknemer.aantalOveruren());