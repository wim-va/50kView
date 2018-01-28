'use strict';

var toetsenbord = require('readline-sync');

var datum = toetsenbord.question("Geef een datum (dd/MM/YYYY): ");
//var expressie = new RegExp("^\\d{1,2}/[0-9]{2}/[0-9]{4}$");
// of:
var expressie = /^\d{1,2}\/[0-9]{2}\/[0-9]{4}$/;
if (expressie.test(datum)) {
	console.log("Dit zou een datum kunnen zijn.");
} else {
	console.log("Dit is geen datum.");
}