'use strict';

var toetsenbord = require('readline-sync');

var datum = toetsenbord.question("Geef een datum (dd/MM/YYYY): ");
if (datum.match(/^\d{1,2}\/\d{2}\/\d{4}$/) != null) {
	console.log("Dit zou een datum kunnen zijn.");
} else {
	console.log("Dit is geen datum.");
}