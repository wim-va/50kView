'use strict';

// CONSTRUCTOR
// functie die we kunnen gebruiken om 0, 1 of meer objecten 
// met dezelfde properties en methodes te maken
function Auto(merk, model, bouwjaar, cabrio){
    this.merk = merk;
    this.model = model;
    this.bouwjaar = bouwjaar;
    this.cabrio = cabrio;
    this.gestart = false;

    // het volstaat om de methodedefinities 1x op te geven
    // ipv bij elk object te onthouden => prototype gebruiken
    /*
    this.rijden = function(geluid){
        if(this.gestart){
            var tmp = this.gegevens();
            console.log("Ik vertrek met mijn %s", tmp);
            console.log(geluid);
        }
        else{
            console.log("start de motor eerst!!");
        }
    };
    this.starten = function(){
        this.gestart = true;
        console.log("de motor draait...");
    };
    this.gegevens = function(){
        var result = "";
        result = this.merk + " " + this.model + " uit " + this.bouwjaar;
        return result;
    };
    */
}

// aangeven welke methodes voor alle auto's bestaan
Auto.prototype.starten = function(){
        this.gestart = true;
        console.log("de motor draait...");
    };

Auto.prototype.rijden = function(geluid){
        if(this.gestart){
            var tmp = this.gegevens();
            console.log("Ik vertrek met mijn %s", tmp);
            console.log(geluid);
        }
        else{
            console.log("start de motor eerst!!");
        }
    };

Auto.prototype.gegevens =  function(){
        var result = "";
        result = this.merk + " " + this.model + " uit " + this.bouwjaar;
        return result;
    };


var mijnAuto;
// object maken met constructor
mijnAuto = new Auto("BMW", "2", 2016, false);
console.log(mijnAuto);
var bouwjaarVanMijnAuto = mijnAuto.bouwjaar;
console.log(bouwjaarVanMijnAuto);
mijnAuto.cabrio = true;
console.log(mijnAuto);
mijnAuto.kleur = "blauw";
console.log(mijnAuto);
console.log(mijnAuto["merk"]);
mijnAuto.rijden("vroem vroem");
mijnAuto.starten();
mijnAuto.rijden("vroem vroem vroem");
var tmp = mijnAuto.gegevens();
console.log(tmp);


var uwAuto = new Auto("Toyota", "Yaris", 2014, false);
console.log(uwAuto.merk);
uwAuto.bouwjaar -= 1;
console.log(uwAuto.bouwjaar);
console.log(mijnAuto.bouwjaar);
uwAuto.starten();
uwAuto.rijden("zoem zoem");