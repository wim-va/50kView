'use strict';

var auto = new Auto();
auto.snelheid = 60;
auto.aantalUren = 2;
auto.aantalMinuten = 5;
console.log("Na %d:%s u gereden te hebben tegen %d km/uur heb je %d km afgelegd",
    auto.aantalUren, auto.aantalMinuten < 10 ? "0"+auto.aantalMinuten : auto.aantalMinuten,  auto.snelheid, auto.afstand());
