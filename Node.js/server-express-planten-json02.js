var express = require('express');
var app = express();

function getRecords(callback) {
	var result = {};
	var mysql = require('mysql');
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'root',
		database: 'deschop',
		port: 3307
	});

	connection.connect();

	connection.query('SELECT * from planten', function (err, rows, fields) {
		if (err) {
			callback(err, {});

		} else {
			callback(null, rows);
		}
	});

	connection.end();
}

// enable cross domain calls (CORS = cross origin resource sharing)
app.all('/*', function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.get('/planten.json', function (req, res) {
	console.log('request received');
	getRecords(function (err, rows) {
		var result;
		if (err) {
			console.log('Error while performing query.');
			result = {};
		}
		else {
			console.log("Sending data to client:");
			//console.log(JSON.stringify(rows));
			result = rows;
		}
		// res.end(JSON.stringify(result));
		res.end(JSON.stringify({ data: rows }));
	});
});

var server = app.listen(1337, function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log("Example app listening at http://%s:%s", host, port)
});