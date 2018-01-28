'use strict';

var mijnAuto;

// object literal
mijnAuto = {
    merk: "BMW",
    model: "2", 
    bouwjaar: 2016,
    cabrio: false,
    gestart: false,

    // methodes = functies die bij een object horen
    rijden: function(){
        if(this.gestart){
            var tmp = this.gegevens();
            console.log("Ik vertrek met mijn %s", tmp);
            console.log("tuuttuut");
        }
        else{
            console.log("start de motor eerst!!");
        }
    },
    starten: function(){
        this.gestart = true;
        console.log("de motor draait...");
    },
    gegevens: function(){
        var result = "";

        // javascript zoekt eerst naar een lokale var met naam merk
        // als die er niet is, zoekt javascript een parameter met naam merk
        // als die er ook niet is, zoekt javascript een globale var met naam merk

        // property merk gebruiken => this.  voor propertynaam merk schrijven
        result = this.merk + " " + this.model + " uit " + this.bouwjaar;
        return result;
    }
};

console.log(mijnAuto);
var bouwjaarVanMijnAuto = mijnAuto.bouwjaar;
console.log(bouwjaarVanMijnAuto);
mijnAuto.cabrio = true;
console.log(mijnAuto);
mijnAuto.kleur = "blauw";
console.log(mijnAuto);
console.log(mijnAuto["merk"]);
mijnAuto.rijden();
mijnAuto.starten();
mijnAuto.rijden();
var tmp = mijnAuto.gegevens();
console.log(tmp);
