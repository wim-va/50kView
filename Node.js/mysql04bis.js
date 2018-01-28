/*
 * vooraf:  npm install mysql 
 */

/* DELETE */

// TODO: code aan gebruiker vragen
var lev_code= '998';

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'deschop',
    port: 3307
});

connection.connect();
connection.query('DELETE FROM leveranciers WHERE lev_code = ?',
    lev_code, function (err, result) {
        if (err) {
            console.log('Error while performing query.');
            console.log(err);
        }
        else {
            console.log("%d rows deleted", result.affectedRows);
        }
    });
connection.end();
