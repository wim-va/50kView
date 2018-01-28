var express = require('express');
var app = express();

/* bodyParser: 
  nodig om invoervelden van form die met method='post' verstuurd is te kunnen verwerken 
*/
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/index.html', function(req, res) {
	res.sendFile(__dirname + "/" + "index.html");
});

app.get('/process_get', function(req, res) {
	console.log("get");
	// Prepare output in JSON format
	var response = {
		first_name : req.query.first_name,
		last_name : req.query.last_name
	};
	console.log(response);
	res.end(JSON.stringify(response));
});

app.post('/process_post', function(req, res) {
	console.log("post");
	// Prepare output in JSON format
	var response = {
		first_name : req.body.first_name,
		last_name : req.body.last_name
	};
	console.log(response);
	res.end(JSON.stringify(response));
});

var server = app.listen(8081, function() {
	var host = server.address().address;
	var port = server.address().port;
	console.log("Example app listening at http://%s:%s", host, port);
});