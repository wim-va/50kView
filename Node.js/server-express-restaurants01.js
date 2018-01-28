var mongoClient = require('mongodb').MongoClient;
var app = require('express')();

// Connection URL
var url = 'mongodb://localhost:27017/test';

// enable cross domain calls (CORS = cross origin resource sharing)
app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// GET /restaurants
app.get('/restaurants', verwerkRequestVoorRestaurants);
app.listen(8888);

function verwerkRequestVoorRestaurants(request, response) {
    mongoClient.connect(url, function (err, db) {
        console.log("Connected successfully to server");
        var collection = db.collection('restaurants');
        collection.find({}, { name: 1, address: 1, cuisine: 1, borough:1, _id: 0 }).toArray(function (err, docs) {
            console.log("Restaurant document(s) found");
            response.send(JSON.stringify(docs));
            db.close();
        });
    });
}