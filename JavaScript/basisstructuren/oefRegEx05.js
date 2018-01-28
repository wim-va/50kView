'use strict';

function controleerRekening(rek) {
	var expressie = new RegExp(/^BE[0-9]{2}( [0-9]{4}){3}$/i);
	var isJuist = false;
	if (expressie.test(rek)) {
		var getallen = rek.split(" ");
		var eersteGetal = parseInt(getallen[1].substr(0, 3), 10);
		var rest = eersteGetal % 97;
		var deel1 = getallen[1].substr(3);
		var deel2 = getallen[2];
		var deel3 = getallen[3].substr(0, 2);
		var deeltal = parseInt(deel1 + deel2 + deel3, 10) + rest * 10000000;
		rest = deeltal % 97;
		if (rest == 0) rest = 97;
		var controle = parseInt(getallen[3].substr(2), 10);
		if (rest == controle)  // geldig belgisch identificatienr
		{
			// om te vermijden dat getallen te groot worden en deling fout loopt:
			// rest bij deling van eerste getal door 97 eerst berekenen (principe staartdeling)
			var identificatieNr = parseInt(getallen[1], 10) % 97;
			identificatieNr = "" + identificatieNr + getallen[2] + getallen[3] + "111400";

			// voorgaande 2 lijnen vervangen onderstaande lijn om fouten te vermijden als getal te groot wordt
			//var identificatieNr = ""+getallen[1] + getallen[2] + getallen[3] + "111400";
			var tmp = parseInt(identificatieNr, 10);
			rest = tmp % 97;
			controle = 98 - rest;
			isJuist = controle == parseInt(getallen[0].substr(2), 10);
		}
	}
	return isJuist;
}

var toetsenbord = require('readline-sync');

var rek = toetsenbord.question("Geef een Belgisch IBAN-nummer (BExx xxxx xxxx xxxx): ");
if (controleerRekening(rek)) {
	console.log("Dit is een geldig IBAN-nummer");
} else {
	console.log("Dit is geen geldig IBAN-nummer");
}