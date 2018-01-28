'use strict';

function Rekening(beginjaar, eindjaar, rente, startbedrag) {
    this.beginjaar = beginjaar;
    this.eindjaar = eindjaar;
    this.rente = rente;
    this.startbedrag = startbedrag;
}

Rekening.prototype.eindbedrag = function () {
    var aantalJaren = this.eindjaar - this.beginjaar;
    var renteFactor = 1.0 + this.rente / 100.0;
    var bedrag = this.startbedrag;
    for (var i = 0; i < aantalJaren; i++) {
        bedrag = bedrag * renteFactor;
    }
    return bedrag;
}


var rekening = new Rekening(2000,2010,4,1000);
console.log("%d EUR belegd tegen %d%% in %d geeft in het jaar %d als eindbedrag %d",
    rekening.startbedrag, rekening.rente, rekening.beginjaar, rekening.eindjaar, rekening.eindbedrag());
