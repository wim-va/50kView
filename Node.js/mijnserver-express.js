// vooraf:  npm install express

'use strict';

var express = require('express');
var app = express();

// !!! volgorde van methodes is belangrijk:
// meest specifieke combinatie van http-method en path eerst

// request method=GET
// path= /smurf.html  (client stuurt request naar /smurf.html)
app.get( "/smurf.html",  function(request, response){
    response.sendFile(__dirname+"/hello.html");
});

// request method=GET
// path eindigt op .html (maar is niet /smurf.html)
app.get("/*.html", function(request, response){
    console.log("request met method GET voor een html pagina wordt verwerkt");
    response.send("request met method GET voor een html pagina wordt verwerkt");
});

// request method=GET
// path is eender wat, maar eindigt niet op .html
app.get("/*", function(request, response){
    console.log("request met method GET wordt verwerkt");
    // request.query : querystring
    var voornaam = request.query.voornaam;  // uit querystring value van key voornaam opvragen
    var naam = request.query.naam;
    console.log("naam en voornaam uit de querystring: %s %s", naam, voornaam);
    response.send("naam en voornaam uit de querystring: " + naam + " " + voornaam);
    //response.send("request met method GET wordt verwerkt");
});

// request method=POST
// eender welk path
app.post("/*", function(request, response){
    console.log("request met method POST wordt verwerkt");
    response.send("request met method POST wordt verwerkt");
});

// request method verschillend van POST en verschillend van GET
// (in het algemeen: all() => eender welke http-method)
app.all("/*", function(request, response){
    console.log("request wordt verwerkt");
    response.send("request wordt verwerkt");
});

app.listen(1337);