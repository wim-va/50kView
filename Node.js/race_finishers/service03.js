/* vooraf:  npm install body-parser   
    (om data die met post doorgestuurd zijn makkelijker op te kunnen vragen) */

var express = require('express');
var app = express();
var path = require("path");
var url = require("url");
var bodyParser = require('body-parser');
var mongoClient = require('mongodb').MongoClient;

// Connection URL
var connectionString = 'mongodb://localhost:27017/test';

/*
var deelnemers = [{ naam: 'Vermeulen', voornaam: 'Joske', gender: 'M', uren: 10, minuten:2 },
    { naam: 'Praline', voornaam: 'Jeanine', gender: 'F', uren: 10, minuten:32 },
    { naam: 'De Bolle', voornaam: 'Octaaf', gender: 'M', uren: 10, minuten:10 },
    { naam: 'Kroket', voornaam: 'Frieda', gender: 'F', uren: 10, minuten:1 }];
*/

function findDeelnemers(db, callback) {
    var result = {};
    // result = { 'deelnemers': deelnemers };
    var collection = db.collection('deelnemers');
    collection.find({}).toArray(function (err, docs) {
        callback(docs);
    });
}

function addDeelnemer(deelnemer, db, callback) {
    var collection = db.collection('deelnemers');
    collection.insertOne(deelnemer, callback);
}

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
    var result = {};
    console.log('request received');
    mongoClient.connect(connectionString, function (err, db) {
        console.log("Connected successfully to server");
        findDeelnemers(db, function (docs) {
//            console.log("Sending data to client:");
//            console.log(JSON.stringify(docs));
            result = docs;
            db.close();
            res.end(JSON.stringify({ 'deelnemers': result }));
        })
    });
});

// nodig om post data (geg die via form met post verstuurd worden) op te vragen:
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/addRunner', function (req, res) {
    console.log('%s %s wordt toegevoegd', req.body.txtFirstName, req.body.txtLastName);
    //  deelnemers.push({ naam: req.body.txtLastName, voornaam: req.body.txtFirstName, gender: req.body.ddlGender, uren: req.body.txtHours, minuten : req.body.txtMinutes });
    mongoClient.connect(connectionString, function (err, db) {
        console.log("Connected successfully to server");
        addDeelnemer({ naam: req.body.txtLastName, voornaam: req.body.txtFirstName, gender: req.body.ddlGender, uren: parseInt(req.body.txtHours), minuten: parseInt(req.body.txtMinutes) },
            db, function (docs) {
                db.close();
                res.end('{"message" : "Added Successfully", "status" : 200}');
            })
    });
});

var server = app.listen(1337, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port)
});