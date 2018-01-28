'use strict';

function Begroting() {
    this.inkomsten = [];
    this.uitgaven = [];
}

Begroting.prototype.voegInkomstToe = function (inkomst) {
    this.inkomsten.push(inkomst);
}

Begroting.prototype.voegUitgaveToe = function (uitgave) {
    this.uitgaven.push(uitgave);
}

Begroting.prototype.presenteerBegroting = function () {
    var tekst = "Uitgaven:\n";
    for (var i = 0; i < this.uitgaven.length; i++) {
        tekst += "-" + this.uitgaven[i] + "\n";
    }
    tekst += "Inkomsten:\n";
    for (var i = 0; i < this.inkomsten.length; i++) {
        tekst += this.inkomsten[i] + "\n";
    }
    var verschil = this.berekenVerschil();
    if (verschil < 0) {
        tekst +=  -verschil + "\n";
    }
    tekst += "De begroting is in evenwicht.\n";
    return tekst;
}

Begroting.prototype.berekenVerschil = function () {
    var totaalInkomsten = 0;
    for (var i = 0; i < this.inkomsten.length; i++) {
        totaalInkomsten += this.inkomsten[i];
    }
    var totaalUitgaven = 0;
    for (var i = 0; i < this.uitgaven.length; i++) {
        totaalUitgaven += this.uitgaven[i];
    }
    return totaalInkomsten - totaalUitgaven;
}


var begroting = new Begroting();
begroting.voegUitgaveToe(5000);
begroting.voegUitgaveToe(6000);
begroting.voegInkomstToe(4000);
begroting.voegUitgaveToe(7000);
begroting.voegInkomstToe(3000);
console.log(begroting.presenteerBegroting());
