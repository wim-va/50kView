window.onload = init;

function init() {
    // versie 2:  toon alle getrokken kaarten
    document.getElementById("btnKaart").onclick = function () {
        var kaart = kaartenboek.volgendeKaart();
        var divKaarten = document.getElementById("kaarten");
        var imgKaart = document.createElement("img");
        imgKaart.src = "./images/blackjack_images/" + kaart.afbeelding;
        divKaarten.appendChild(imgKaart);
        disableVolgendeKnop();
    }

    document.getElementById("btnSchud").onclick = function () {
        kaartenboek.schud();
        var stapel = document.getElementById("stapel");
        var divKaarten = document.getElementById("kaarten");
        while (divKaarten.firstChild) {
            divKaarten.removeChild(divKaarten.firstChild);
        }
        divKaarten.appendChild(stapel);
        disableVolgendeKnop();
    }
}

function disableVolgendeKnop() {
    document.getElementById("btnKaart").disabled = kaartenboek.isLeeg();
}