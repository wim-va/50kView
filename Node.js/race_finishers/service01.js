var express = require('express');
var app = express();
var path = require("path");
var url = require("url");

var deelnemers = [{ naam: 'Vermeulen', voornaam: 'Joske', gender: 'M', uren: 10, minuten:2 },
    { naam: 'Praline', voornaam: 'Jeanine', gender: 'F', uren: 10, minuten:32 },
    { naam: 'De Bolle', voornaam: 'Octaaf', gender: 'M', uren: 10, minuten:10 },
    { naam: 'Kroket', voornaam: 'Frieda', gender: 'F', uren: 10, minuten:1 }];

// enable cross domain calls (CORS = cross origin resource sharing)
app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get(['/*.htm*', '/*.css', '/scripts/*.js'], function (req, res) {
    res.sendFile(path.join(__dirname + url.parse(req.url).pathname));
});

app.get('/uitslagen.json', function (req, res) {
    console.log('request received');
    res.end(JSON.stringify({ 'deelnemers': deelnemers }));
});

var server = app.listen(1337, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port)
});