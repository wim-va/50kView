'use strict';

function Speelkaart(kleur, waarde, punten, afbeelding) {
    this.kleur = kleur;
    this.waarde = waarde;
    this.punten = punten;
    this.afbeelding = afbeelding;
}

Speelkaart.prototype.omschrijving = function () {
    return this.kleur + " " + this.waarde;
}

function Speelkaartenboek() {
    var afkortingenKleuren = ['h', 's', 'd', 'c'];
    this.speelkaarten = [];
    this.index = 0;
    for (var kleur = 0; kleur < this.kleuren.length; kleur++) {
        for (var waarde = 0; waarde < this.waarden.length; waarde++) {
            this.speelkaarten.push(new Speelkaart(this.kleuren[kleur], this.waarden[waarde], waarde + 1, (waarde + 1) + afkortingenKleuren[kleur] + ".png"));
        }
    }
}

Speelkaartenboek.prototype.kleuren = ["harten", "schoppen", "ruiten", "klaveren"];
Speelkaartenboek.prototype.waarden = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "boer", "dame", "heer"];
Speelkaartenboek.prototype.volgendeKaart = function () {
    if (this.index < this.speelkaarten.length) {
        return this.speelkaarten[this.index++];
    }
    return null;
}
Speelkaartenboek.prototype.schud = function () {
    for (var kaart = 0; kaart < this.speelkaarten.length; kaart++) {
        var indexWissel = Math.floor(Math.random() * this.speelkaarten.length);
        var tmp = this.speelkaarten[kaart];
        this.speelkaarten[kaart] = this.speelkaarten[indexWissel];
        this.speelkaarten[indexWissel] = tmp;
    }
    this.index = 0;
}
Speelkaartenboek.prototype.isLeeg = function () {
    return this.index == this.speelkaarten.length;
}

function Hand() {
    this.speelkaarten = [];
}

Hand.prototype.voegKaartToe = function (kaart) {
    this.speelkaarten.push(kaart);
}

Hand.prototype.punten = function () {
    var result = 0;
    for (var kaart = 0; kaart < this.speelkaarten.length; kaart++) {
        result += this.speelkaarten[kaart].punten;
    }
    return result;
}

Hand.prototype.magStoppen = function () {
    return this.punten() >= 17;
}

Hand.prototype.isKapot = function () {
    return this.punten() > 21;
}

Hand.prototype.factor = function () {
    switch (this.punten()) {
        case 21: return 3;
        case 20: return 2;
        case 19: return 1;
        default: return 0;
    }
}

var kaartenboek = new Speelkaartenboek();
var hand = new Hand();

/*
kaartenboek.schud();
do {
    var kaart = kaartenboek.volgendeKaart();
    console.log(kaart.omschrijving());
    hand.voegKaartToe(kaart);
    console.log("punten hand: %d", hand.punten());
} while (!hand.magStoppen());
if (hand.isKapot()) {
    console.log("Helaas, u bent uw inzet kwijt");
}
else {
    console.log("U krijgt uw inzet %d keer terug", hand.factor());
}
*/