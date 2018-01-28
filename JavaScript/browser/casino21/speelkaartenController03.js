window.onload = init;

function init() {
    // versie 3:  toon alle getrokken kaarten 
    // we spelen "21":  
    // speler mag kaart vragen zolang hij niet "kapot" is (kapot : > 21 punten)
    // vanaf 17 punten worden de punten getoond, alsook hoe vaak de speler zijn inzet terug krijgt
    kaartenboek.schud();

    document.getElementById("btnKaart").onclick = function () {
        var kaart = kaartenboek.volgendeKaart();
        hand.voegKaartToe(kaart);
        var divKaarten = document.getElementById("kaarten");
        var imgKaart = document.createElement("img");
        imgKaart.src = "./images/blackjack_images/" + kaart.afbeelding;
        divKaarten.appendChild(imgKaart);
        bepaalEinde();
    }

    document.getElementById("btnSchud").onclick = function () {
        kaartenboek.schud();
        hand = new Hand();
        var stapel = document.getElementById("stapel");
        var divKaarten = document.getElementById("kaarten");
        while (divKaarten.firstChild) {
            divKaarten.removeChild(divKaarten.firstChild);
        }
        divKaarten.appendChild(stapel);
        bepaalEinde();
    }
}

function bepaalEinde() {
    document.getElementById("btnKaart").disabled = hand.isKapot();
    var divResult = document.getElementById("result");
    if (hand.magStoppen()) {
        if (hand.isKapot()) {
            divResult.innerHTML = "Helaas... kapot...";
        }
        else {
            divResult.innerHTML = "U hebt " + hand.punten() +
                " punten.  Hiermee krijgt u uw inzet " + hand.factor() + " keer terug.";
        }
    }
    else {
        divResult.innerHTML = "";
    }
}