function Broodje(naam, prijs) {
    this.naam = naam;
    this.prijs = prijs;
};

function BestelLijn(broodje, aantal) {
    this.broodje = broodje;
    this.aantal = aantal;
}

function Bestelling() {
    this.bestellijnen = [];
}

Bestelling.prototype.voegLijnToe = function (lijn) {
    this.bestellijnen.push(lijn);
}

Bestelling.prototype.totaalprijs = function () {
    var totaal = 0;
    for (var i = 0; i < this.bestellijnen.length; i++) {
        totaal += this.bestellijnen[i].broodje.prijs * this.bestellijnen[i].aantal;
    }
    return totaal;
}