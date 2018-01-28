'use strict';
var events = require('events');
var eventEmitter = new events.EventEmitter();

function Rekening(saldo=0){
    this.saldo = saldo;
}

Rekening.prototype.stortGeld = function(bedrag){
    this.saldo += bedrag;
}

Rekening.prototype.haalGeldAf = function(bedrag){
    if (this.saldo >= bedrag){
        this.saldo -= bedrag;
    }
    else{
        eventEmitter.emit('saldo_negatief', this);
    }
}

Rekening.prototype.on = function( eventName, eventHandler){
    eventEmitter.on(eventName, eventHandler);
}

var rekening = new Rekening(100);
rekening.on('saldo_negatief', function(src){
    console.log("saldo ontoereikend! (Saldo bedraagt ",src.saldo,")");
});
console.log("saldo na creatie: ", rekening.saldo);
var bedrag  = 20;
rekening.stortGeld(bedrag);
console.log("saldo na storting van ", bedrag, ": ", rekening.saldo);
bedrag = 10;
rekening.haalGeldAf(bedrag);
console.log("saldo na opname van ", bedrag, ": ", rekening.saldo);
bedrag = 150;
rekening.haalGeldAf(bedrag);
console.log("saldo na opname van ", bedrag, ": ", rekening.saldo);