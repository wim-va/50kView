/*
 * invoer lezen van console
 * 
 * vooraf: module sget installeren om invoer van de console te kunnen lezen.
 * cmd-prompt, [projectfolder]: npm install sget 
 */

"use strict";
var sget = require('sget');

var invoer = sget('voer een getal in: ');
var getal1 = parseInt(invoer);
invoer = sget('voer nog een getal in: ');
var getal2 = parseInt(invoer);
console.log( '%d + %d = %d', getal1, getal2, getal1 + getal2);

// opm:  console.log:  eerste param = formatstring met plaatshouders, 
// params waarvoor geen plaatshouder voorzien is, worden geconcateneerd met formatstring;
// console.log voegt achteraan \n toe
