'use strict';

function Speelkaart(kleur, waarde, afbeelding){
    this.kleur = kleur;
    this.waarde = waarde;
    this.afbeelding = afbeelding;
}

Speelkaart.prototype.omschrijving = function(){
    return this.kleur + " " + this.waarde;
}

function Speelkaartenboek() {
    var afkortingenKleuren = ['h','s','d','c'];
    this.speelkaarten = [];
    this.index = 0;
    for (var kleur = 0; kleur < this.kleuren.length; kleur++) {
        for (var waarde = 0; waarde < this.waarden.length; waarde++) {
            this.speelkaarten.push(new Speelkaart(this.kleuren[kleur], this.waarden[waarde], (waarde+1)+afkortingenKleuren[kleur]+".png"));
        }
    }
}

Speelkaartenboek.prototype.kleuren = ["harten", "schoppen", "ruiten", "klaveren"];
Speelkaartenboek.prototype.waarden = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "boer", "dame", "heer"];
Speelkaartenboek.prototype.volgendeKaart = function(){
        if(this.index < this.speelkaarten.length){
            return this.speelkaarten[this.index++];
        }
        return null;
}
Speelkaartenboek.prototype.schud = function(){
    for(var kaart=0; kaart<this.speelkaarten.length; kaart++){
        var indexWissel = Math.floor(Math.random() * this.speelkaarten.length);
        var tmp = this.speelkaarten[kaart];
        this.speelkaarten[kaart] = this.speelkaarten[indexWissel];
        this.speelkaarten[indexWissel] = tmp;
    }
    // korter alternatief:
    // this.speelkaarten.sort( function(a,b){ return 0.5 - Math.random();} );
    this.index = 0;
}
Speelkaartenboek.prototype.isLeeg = function(){
    return this.index == this.speelkaarten.length;
}

/*
var klaverenDrie = new Speelkaart("klaveren", "3");
console.log(klaverenDrie.omschrijving());
*/
var kaartenboek = new Speelkaartenboek();
/*
console.log("boek na creatie:");
for (var i = 0; i < kaartenboek.speelkaarten.length; i++) {
    console.log(kaartenboek.speelkaarten[i].omschrijving());
}
if (kaartenboek.isLeeg()){
    console.log("*** alle kaarten zijn opgevraagd ***");  
}
else{
    console.log("*** er zijn nog niet opgevraagde kaarten ***"); // YEP
}
console.log("kaarten een voor een vragen na creatie:");
for (var i = 0; i < kaartenboek.speelkaarten.length; i++) {
    console.log(kaartenboek.volgendeKaart().omschrijving());
}
if (kaartenboek.isLeeg()){
    console.log("*** de stapel is leeg; alle kaarten zijn opgevraagd ***");  // YEP
}
else{
    console.log("*** er zijn nog niet opgevraagde kaarten ***");
}
kaartenboek.schud();  // start terug met volledig boek en schud de kaarten
if (kaartenboek.isLeeg()){
    console.log("*** alle kaarten zijn opgevraagd ***");  
}
else{
    console.log("*** na schudden starten we terug met een volledig boek ***"); // YEP
}
console.log("kaarten een voor een vragen na schudden:");
for (var i = 0; i < kaartenboek.speelkaarten.length; i++) {
    console.log(kaartenboek.volgendeKaart().omschrijving());
}
*/