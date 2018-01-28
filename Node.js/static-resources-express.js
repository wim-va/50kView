var express = require('express');
var app = express();

app.use(express.static('public'));  // pad relatief tov pad van dit bestand

app.get('/', function (req, res) {
   res.send('Surf eens naar images/betalogo.gif');
});

var server = app.listen(8081, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);

});