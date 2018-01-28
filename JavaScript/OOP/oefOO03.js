'use strict';

function Tankbeurt(brandstofHoeveelheid, afstand) {
    this.brandstofHoeveelheid = brandstofHoeveelheid;
    this.afstand = afstand;
}

var toetsenbord = require('readline-sync');
var hoeveelheid, afstand;
var tankbeurten = [];
for (var i = 0; i < 5; i++) {
    hoeveelheid = parseFloat(toetsenbord.question('Hoeveelheid brandstof (l): '));
    afstand = parseFloat(toetsenbord.question('Afstand (km): '));
    // var tankbeurt = new Tankbeurt(hoeveelheid, afstand);
    // tankbeurten[i] = tankbeurt;
    // of met push:
    // tankbeurten.push(tankbeurt);

    // zonder hulpobject:
    tankbeurten.push(new Tankbeurt(hoeveelheid, afstand));
}

console.log(tankbeurten);

var somHoeveelheid = 0, somAfstand = 0;
for (var i = 0; i < tankbeurten.length; i++) {
    // var tankbeurt = tankbeurten[i];
    // somAfstand += tankbeurt.afstand;
    // somHoeveelheid += tankbeurt.brandstofHoeveelheid;

    // zonder hulpobject:
    somAfstand += tankbeurten[i].afstand;
    somHoeveelheid += tankbeurten[i].brandstofHoeveelheid;
}
console.log('Totale hoeveelheid brandstof = %dl', somHoeveelheid);
console.log('Totale afstand = %dkm', somAfstand);
console.log('Verbruik per 100km = %dl', 100 * somHoeveelheid / somAfstand);