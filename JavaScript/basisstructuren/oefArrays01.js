'use strict';

var toetsenbord = require('readline-sync');
var lijst = new Array(5);
for (var i = 0; i < lijst.length; i++) {
    lijst[i] = toetsenbord.question("Geef een naam: ");
}
lijst.sort();
console.log(lijst);
