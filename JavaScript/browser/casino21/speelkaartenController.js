window.onload = init;

function init(){
    // versie 1:  overschrijf afbeelding
    document.getElementById("btnKaart").onclick = function(){
        var kaart = kaartenboek.volgendeKaart();
        var imgKaart = document.getElementById("kaart");
        imgKaart.src = "./images/blackjack_images/"+kaart.afbeelding;
        disableVolgendeKnop();
    }

    document.getElementById("btnSchud").onclick = function(){
        kaartenboek.schud();
        var imgKaart = document.getElementById("kaart");
        imgKaart.src = "";
        disableVolgendeKnop();
    }
}

function disableVolgendeKnop(){
    document.getElementById("btnKaart").disabled = kaartenboek.isLeeg();
}