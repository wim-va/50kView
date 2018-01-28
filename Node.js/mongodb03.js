/*
 * vooraf:  npm install mongodb
 */

// zie ook http://mongodb.github.io/node-mongodb-native/2.2/quick-start/

'use strict';

var mongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/test';

mongoClient.connect(url, function (err, db) {
  console.log("Connected successfully to server");
  var collection = db.collection('restaurants');
  // update some documents
  collection.updateMany({ borough: "Missing" }, { $set: { borough: "unknown" } }, function (err, r) {
    console.log("%s restaurants are updated", r.modifiedCount);
    db.close();
  });
});