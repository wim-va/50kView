/*
 * vooraf:  npm install mysql 
 */

function getRecords() {
	var result = {};
	var mysql = require('mysql');
	var connection = mysql.createConnection({
		host : 'localhost',
		user : 'root',
		password : 'root',
		database : 'deschop',
		port: 3307
	});

	connection.connect();

	// let op! asynchrone oproep!!!  
	connection.query('SELECT * from planten', function(err, rows, fields) {
		if (err) {
			console.log('Error while performing query.');
			result = {};
		} else {
			console.log("Sending data to client:");
			console.log(JSON.stringify(rows));
			result = rows;
		}
	});

	connection.end();

	// onderstaande lijn geeft steeds {} terug; want
	// door async oproep van query is opvraging van planten nog bezig (en heeft result nog niet de gewenste waarde) terwijl de stmts
	// na oproep van query al uitgevoerd worden
	return JSON.stringify(result);
}

var http = require('http');
http.createServer(function handler(req, res) {
	console.log('request received');
	res.writeHead(200, {
		'Content-Type' : 'application/json'
	});
	res.end(getRecords());    
}).listen(1337, 'localhost');
console.log('Server running at http://localhost:1337/');
