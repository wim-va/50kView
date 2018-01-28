/*
 * vooraf:  npm install node-mysql 
 */

/* MULTIPLE INSERTS */

function insertRecords(rows, callback) {
	var mysql = require('mysql');
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'root',
		database: 'deschop',
		port: 3307,
		/* !!! */ multipleStatements: true
	});

	connection.connect();
	var sql = '';
	for(var i=0; i < rows.length; i++){
		sql += 'INSERT INTO leveranciers SET ?;'
	}
	connection.query(sql, rows, function (err, results) {
		if (err) {
			callback(err, results);
		} else {
			callback(null, results);
		}
	});
	connection.end();
}

var row1 = { lev_code: '998', lev_naam: 'GROTE SMURF', adres: 'Paddenstoel 1', woonplaats: 'Smurfendorp', korting: 0 };
var row2 = { lev_code: '997', lev_naam: 'SMURFIN', adres: 'Vliegenzwam 86', woonplaats: 'Smurfendorp', korting: 0 };
var row3 = { lev_code: '996', lev_naam: 'BABYSMURF', adres: 'De kleine paddenstoel', woonplaats: 'Smurfendorp', korting: 0 };
var rows = [row1, row2, row3];
insertRecords(rows, function (err, results) {
	if (err) {
		console.log('Error while performing query.');
		console.log(err);
	}
	else {
		for(var i=0; i< results.length; i++){
			console.log("%d row(s) inserted", results[i].affectedRows);
		}
	}
});   