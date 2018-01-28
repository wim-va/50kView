/* vooraf:  
npm install express
npm install cookie-parser
*/

var express = require('express');
var app = express();
var path = require("path");
var url = require("url");
var cookieParser = require('cookie-parser');

app.use(cookieParser());

app.get('/setCookie', function (req, res){
    res.cookie('policyOK', 'true');
    res.end("cookie set");
});

app.get('/*', function(req, res){
    console.log(req.cookies);
    if (req.cookies.policyOK != 'true'){
        res.sendFile(path.join(__dirname +'/cookies.html'));
    }
    else{
        res.sendFile( path.join(__dirname + url.parse(req.url).pathname));
    }
});

var server = app.listen(1338, function () {
   var host = server.address().address;
   var port = server.address().port;

   console.log("Example app listening at http://%s:%s", host, port)
});