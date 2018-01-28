'use strict';

function Persoon(naam, voornaam){
    this.naam = naam;
    this.voornaam = voornaam;
}

Persoon.prototype.volledigeNaam = function(){
    return this.voornaam + " " + this.naam.toUpperCase();
}

Persoon.prototype.stringMetAlleGegevens = function(){
    // in praktijk worden hier alle belangrijke props van een persoon geconcateneerd
    return this.volledigeNaam();
}

function Werknemer(naam, voornaam, loon){
    /*
    this.naam = naam;
    this.voornaam = voornaam;
    */
    // of korter, door ctor van Persoon op te roepen:
    // Persoon.apply(this, [naam, voornaam]);
    Persoon.apply(this, arguments);

    this.loon = loon;
}

// elke werknemer is een persoon
// en heeft alle properties en methodes die een persoon heeft
// (zonder deze opnieuw te definieren voor een werknemer)
// INHERITANCE = OVERERVING
Werknemer.prototype = new Persoon();
// !!! inheritance moet aangegeven worden voor methodes voor Werknemer.prototype gedef worden

/*
// als we methode volledigeNaam niet definieren voor Werknemer
// krijgen/erven werknemers de methode volledigeNaam van Persoon
Werknemer.prototype.volledigeNaam = function(){
    return this.voornaam + " " + this.naam.toUpperCase();
}
*/

Werknemer.prototype.verhoogLoon = function(percent){
    this.loon *= (1+percent/100);
}

// overgeerfde methode van Persoon overschrijven
Werknemer.prototype.stringMetAlleGegevens = function(){
    return  Persoon.prototype.stringMetAlleGegevens.call(this) + " loon: " + this.loon;  
    // return this.stringMetAlleGegevens() + " loon: " + this.loon;  // oneindige lus
}



var persoon1 = new Persoon("Kapot", "Isabel");
console.log("voornaam en naam van persoon1: %s %s", persoon1.voornaam, persoon1.naam);
console.log(persoon1.volledigeNaam());  // Isabel KAPOT

var werknemer1 = new Werknemer("Stok", "Pol", 1234);
console.log("voornaam en naam van werknemer1: %s %s", werknemer1.voornaam, werknemer1.naam);
console.log("loon van werknemer1: %d", werknemer1.loon);
console.log(werknemer1.volledigeNaam());  // Pol STOK
werknemer1.verhoogLoon(10);
console.log("loon van werknemer1 na verhoging: %d", werknemer1.loon);

// persoon1.verhoogLoon(5);  // uitvoeringsfout; want
// verhoogLoon is niet gedefinieerd voor prototype Persoon

var persoon2 = new Persoon("Selie", "Peter");

// property toevoegen aan een object
console.log(persoon1.nationaliteit);  // undefined
persoon1.nationaliteit = "Belg";
console.log(persoon1.nationaliteit);  // Belg
console.log(persoon2);  // persoon2 heeft GEEN prop nationaliteit

// methode toevoegen aan een object
var werknemer2 = new Werknemer("Kanarie", "Piet", 2345);
werknemer2.krijgOntslag = function (){
    // output om didactische reden ;-)
    console.log("Helaas, pindakaas. Dankjewel, %s", this.volledigeNaam());
}
werknemer2.krijgOntslag();

// werknemer1.krijgOntslag();  // uitvoeringsfout; want
// krijgOntslag is enkel gedef voor object werknemer2

console.log(persoon1.stringMetAlleGegevens());
console.log(werknemer2.stringMetAlleGegevens());

// met operator instanceof kun je nagaan of een object al dan niet met een bepaalde ctor
// gemaakt is
if(persoon1 instanceof Persoon){
    console.log("persoon1 is gemaakt met de ctor van Persoon");
}
if(persoon2 instanceof Persoon){
    console.log("persoon2 is gemaakt met de ctor van Persoon");
}
if(werknemer1 instanceof Persoon){
    console.log("werknemer1 is gemaakt met de ctor van Persoon");
}
if(werknemer2 instanceof Persoon){
    console.log("werknemer2 is gemaakt met de ctor van Persoon");
}
if(persoon1 instanceof Werknemer){
    console.log("persoon1 is gemaakt met de ctor van Werknemer");
}
if(persoon2 instanceof Werknemer){
    console.log("persoon2 is gemaakt met de ctor van Werknemer");
}
if(werknemer1 instanceof Werknemer){
    console.log("werknemer1 is gemaakt met de ctor van Werknemer");
}
if(werknemer2 instanceof Werknemer){
    console.log("werknemer2 is gemaakt met de ctor van Werknemer");
}