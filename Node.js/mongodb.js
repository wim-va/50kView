/*
 * vooraf:  npm install mongodb
 */

// zie ook http://mongodb.github.io/node-mongodb-native/2.2/quick-start/
'use strict';

var mongoClient = require('mongodb').MongoClient;

// Connection URL
var url = 'mongodb://localhost:27017/test';

// Use connect method to connect to the server
mongoClient.connect(url, function (err, db) {
    console.log("Connected successfully to server");
    // Get the restaurants collection
    var collection = db.collection('restaurants');
    // Find all documents
    collection.find().toArray(function (err, docs) {
        console.log("Restaurant document(s) found:");
        docs.forEach(function (element) {
            console.log('%s (%s), %s', element.name, element.cuisine, element.address ? element.address.street : "");
        });
        db.close();
    });
});