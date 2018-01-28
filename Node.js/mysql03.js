/*
 * vooraf:  npm install mysql 
 */

/* INSERT */

function insertRecord(row, callback) {
	var mysql = require('mysql');
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'root',
		database: 'deschop',
		port: 3307
	});

	connection.connect();
	connection.query('INSERT INTO leveranciers SET ?', row, function (err, result) {
		if (err) {
			callback(err, result);

		} else {
			callback(null, result);
		}
	});
	connection.end();
}

var row = { lev_code: '997', lev_naam: 'GROTE SMURF 2', adres: 'Paddenstoel 1', woonplaats: 'Smurfendorp', korting: 0 };
insertRecord(row, function (err, result) {
	if (err) {
		console.log('Error while performing query.');
		console.log(err);
	}
	else {
		console.log("%d rows affected", result.affectedRows);
		if (result.affectedRows == 1) {
		}
	}
});   
