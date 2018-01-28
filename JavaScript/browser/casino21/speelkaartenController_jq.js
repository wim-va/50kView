// speelkaartenView.js herschreven met jQuery
$('document').ready( function (){
    // versie 1:  overschrijf afbeelding
    $("#btnKaart").click(function(){
        var kaart = kaartenboek.volgendeKaart();
        var imgKaart = $("#kaart");
        imgKaart.attr("src", "./images/blackjack_images/"+kaart.afbeelding);
        disableVolgendeKnop();
    });

    $("#btnSchud").click(function(){
        kaartenboek.schud();
        var imgKaart = $("#kaart");
        imgKaart.attr("src", "");
        disableVolgendeKnop();
    });
});

function disableVolgendeKnop(){
    $("#btnKaart").attr("disabled", kaartenboek.isLeeg());
}