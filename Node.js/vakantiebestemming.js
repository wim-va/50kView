var bestemmingen = ["Het strand", "De kust", "De zee"];

var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/vakantiebestemming.html', function(req, res) {
	res.sendFile(__dirname + "/" + "vakantiebestemming.html");
});

/* omdat een inschrijving in praktijk veranderingen op de server teweeg brengt,
kiezen we voor post */
app.post('/process_inschrijving', function(req, res) {
	var inschrijving = {
		naam : req.body.naam,
		geslacht : req.body.geslacht,
		bestemming: req.body.bestemming,
		lid: req.body.lid
	};
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end(maakHtmlBevestiging(inschrijving));
});

function maakHtmlBevestiging(inschrijving){
	var hoofding = "<!DOCTYPE html><html><head><title>Op reis</title></head>";
	var body = "<body><h1>Registratie gelukt</h1>"+maakInschrijvingsString(inschrijving)+"</body>";
	return hoofding+body;
}

function maakInschrijvingsString(inschrijving){
	var result = "Dag ";
	result += inschrijving.geslacht == "m" ? "mijnheer" : "mevrouw";
	result += " "+ inschrijving.naam + ".  Uw inschrijving voor een reis naar ";
	result += bestemmingen[inschrijving.bestemming] + " is geregistreerd.";
	if (inschrijving.lid == "on"){
		result += " Als lid geniet u uiteraard van onze uitzonderlijke voordelen."
	}
	return result;
}

var server = app.listen(8081, function() {
	var host = server.address().address;
	var port = server.address().port;
	console.log("Example app listening at http://%s:%s", host, port);
});