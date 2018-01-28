/* gebruik module smurf.js */
'use strict';

//  voer de require functie van smurf.js, die module.exports teruggeeft, uit
var tmp = require('./smurf');
tmp.zing();
console.log("de hoed van grote smurf is", tmp.hoedKleur);