'use strict';

var events = require("events");
var eventsEmitter = new events.EventEmitter();

// event afvuren (= signaleren dat iets gebeurd is)
eventsEmitter.emit('brand');
// vermits nog geen eventhandler aan het event 'brand' gekoppeld is, gebeurt er niets

// event afhandelen (= aangeven wat moet gebeuren als vanaf hier een bepaald event afgevuurd wordt)
eventsEmitter.on('brand', function(){
    console.log("bel de brandweer!");
});

eventsEmitter.on('muis', watAlsErEenMuisIs);
eventsEmitter.on('rat', watAlsErEenMuisIs);

eventsEmitter.on('brand', function(){
    console.log("sluit de ramen!");
});

eventsEmitter.emit('brand');
eventsEmitter.emit('brand');
eventsEmitter.emit('brand');

eventsEmitter.emit('muis');
eventsEmitter.emit('rat');

function watAlsErEenMuisIs(){
    console.log("Spring zsm op de tafel!");
}