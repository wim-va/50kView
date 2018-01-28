// speelkaartenView02.js herschreven met jQuery
$("document").ready( function (){
    // versie 2:  toon alle getrokken kaarten
    $("#btnKaart").click (function () {
        var kaart = kaartenboek.volgendeKaart();
        var divKaarten = $("#kaarten");
        var imgKaart = $("<img></img>");
        imgKaart.attr("src","./images/blackjack_images/" + kaart.afbeelding);
        divKaarten.append(imgKaart);
        disableVolgendeKnop();
    });

    $("#btnSchud").click(function () {
        kaartenboek.schud();
        var stapel = $("#stapel");
        var divKaarten = $("#kaarten");
        divKaarten.empty();
        divKaarten.append(stapel);
        disableVolgendeKnop();
    });
});

function disableVolgendeKnop() {
    $("#btnKaart").attr("disabled", kaartenboek.isLeeg());
}