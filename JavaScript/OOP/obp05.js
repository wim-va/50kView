'use strict';

function Auto() {
    this.snelheid = 0;
    this.aantalUren = 0;
    this.aantalMinuten = 0;
}

Auto.prototype.afstand = function () {
    var afstand = this.aantalUren * this.snelheid;
    afstand = afstand + this.aantalMinuten * this.snelheid / 60.0;
    return afstand;
}



var auto = new Auto();
auto.snelheid = 60;
auto.aantalUren = 2;
auto.aantalMinuten = 5;
console.log("Na %d:%s u gereden te hebben tegen %d km/uur heb je %d km afgelegd",
    auto.aantalUren, auto.aantalMinuten < 10 ? "0"+auto.aantalMinuten : auto.aantalMinuten,  auto.snelheid, auto.afstand());
