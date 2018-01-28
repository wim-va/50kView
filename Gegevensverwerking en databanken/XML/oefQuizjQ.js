/* oplossing met jQuery */
'use strict';

const AANTALVRAGEN = 3;
var atomen, aantal, score, indexHuidigAtoom, startTijd, top3;

$(document).ready(function () {
    laadAtomen();
    laadTop3();
    $("#btnStart").click(start);
    $("#btnOK").hide();
    $("#btnOK").click(verwerkAntwoord);
});

function laadAtomen() {
    atomen = [];
    var doc = loadXMLDoc("xml-bestanden/allelements.xml");
    $.each(doc.getElementsByTagName("ATOM"), function (i, xmlAtom) {
        atomen.push(new Atoom(xmlAtom.querySelector("NAME").textContent,
            xmlAtom.querySelector("SYMBOL").textContent));
    });
}

function laadTop3() {
    top3 = JSON.parse(localStorage.getItem("top3"));
    if (top3 == null) top3 = [];
}

function start() {
    aantal = 0;
    score = 0;
    toonVolgendAtoom();
    $("#btnOK").show();
    $("#btnStart").hide();
    $("#divFeedback").text("");
    $("#divScore").text("");
    startTijd = Date.now();
}

function toonVolgendAtoom() {
    indexHuidigAtoom = Math.floor(Math.random() * atomen.length);
    $("#txtNaam").val(atomen[indexHuidigAtoom].naam);
    $("#txtSymbool").val("");
    $("#txtSymbool").focus();
}

function verwerkAntwoord() {
    aantal++;
    if ($("#txtSymbool").val() == atomen[indexHuidigAtoom].symbool) {
        verwerkJuistAntwoord();
    }
    else {
        verwerkFoutAntwoord();
    }
    toonVolgendAtoom();
    if (aantal == AANTALVRAGEN) {
        verwerkEindeQuiz();
    }
    else {
        $("#divScore").text(`Uw tijd: ${verstrekenTijd(startTijd, Date.now())}`);
    }
}

function verwerkJuistAntwoord() {
    score++;
    $("#divFeedback").text("Juist.");
}

function verwerkFoutAntwoord() {
    $("#divFeedback").text(`Dit is fout. Het symbool van ${atomen[indexHuidigAtoom].naam} is ${atomen[indexHuidigAtoom].symbool}.`);
}

function verwerkEindeQuiz() {
    var eindTijd = Date.now();
    verstrekenTijd(startTijd, eindTijd);
    $("#txtNaam").val("");
    $("#btnOK").hide();
    $("#btnStart").show();
    $("#divScore").text(
        `Uw score: ${score}/${aantal}\nUw tijd: ${verstrekenTijd(startTijd, eindTijd)}`);
    voegToeAanTop3(new Score(prompt("Uw naam: "), score, aantal, eindTijd - startTijd));
}

function verstrekenTijd(startTijd, eindTijd) {
    var verstrekenMilliSec = eindTijd - startTijd;
    var verstrekenSec = Math.floor(verstrekenMilliSec / 1000);
    verstrekenMilliSec -= verstrekenSec * 1000;
    return `${verstrekenSec} sec ${verstrekenMilliSec} msec`;
}

function voegToeAanTop3(kandidaatScore) {
    top3.push(kandidaatScore);
    top3.sort(function (score1, score2) {
        if (score1.score > score2.score) return -1;
        if (score1.score < score2.score) return 1;
        if (score1.tijd < score2.tijd) return -1;
        if (score1.tijd > score2.tijd) return 1;
        return score1.datum - score2.datum;
    });
    if (top3.length > 3) {
        top3.length = 3;
    }
    localStorage["top3"] = JSON.stringify(top3);
}

function Atoom(naam, symbool) {
    this.naam = naam;
    this.symbool = symbool;
}

function Score(naam, score, aantal, tijd) {
    this.naam = naam;
    this.score = score;
    this.aantal = aantal;
    this.datum = new Date();
    this.tijd = tijd;   // tijd in millisec
}