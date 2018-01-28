function geefLeeftijd(datum) {
	var geboorteJaar = this.getYear();
	var geboorteMaand = this.getMonth();
	var geboorteDag = this.getDate();
	var vandaagJaar = datum.getYear();
	var vandaagMaand = datum.getMonth();
	var vandaagDag = datum.getDate();
	var leeftijd = vandaagJaar - geboorteJaar;
	if (geboorteMaand > vandaagMaand) {
		leeftijd--;
	} else if (geboorteMaand == vandaagMaand) {
		if (geboorteDag > vandaagDag) {
			leeftijd--;
		}
	}
	return leeftijd;
}

Date.prototype.geefLeeftijd = geefLeeftijd;
var geboorteDatum = new Date(2000, 11, 11);  // 11 december 2000
var refDatum = new Date(2017, 11, 10);  // 10 december 2017
console.log("op ", refDatum.toLocaleDateString("nl-BE"), " is deze persoon ",
	geboorteDatum.geefLeeftijd(refDatum), " jaar oud");

// opm ivm toLocaleDateString:
// NodeJs houdt geen rekening met doorgegeven locale;
// browsers houden wel rekening met doorgegeven locale.
// als geen locale doorgegeven wordt, hangt het resultaat af van platform, locale en gebruikersinstellingen 