/*
 * vooraf:  npm install mysql 
 */

/* UPDATE */

function updateRecord(row, callback) {
	var mysql = require('mysql');
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'root',
		database: 'deschop',
		port: 3307
	});

	connection.connect();
	connection.query('UPDATE leveranciers SET adres = ?, woonplaats = ? WHERE lev_code = ?',
		row, function (err, result) {
			if (err) {
				callback(err, result);

			} else {
				callback(null, result);
			}
		});
	connection.end();
}

var row = ['Grote Vliegenzwam', 'Smurfenstad', '997']; 
updateRecord(row, function (err, result) {
	if (err) {
		console.log('Error while performing query.');
		console.log(err);
	}
	else {
		console.log("%d rows affected", result.affectedRows);
	}
});   
