'use strict';

/*
code van voorgedefinieerde functie require:
    var require = function(path) {
        // ...
        return module.exports;
    };
*/

var mod1 = require('./mijnmodule01.js');  // !!! ./ moet in path staan
mod1.helloInEnglish();
mod1.helloInDutch("Grote smurf");

//fie1.mijnFieZonderExport01();  // fout; want mijnFieZonderExport01 is niet geëxporteerd
 console.log(mod1.v1);  // undefined; want v is niet geëxporteerd
 console.log(mod1.v2); 

var Mod2 = require('./mijnmodule02.js')
var obj = new Mod2("ik kan door een waterkraan, en ook door een sleutelgat");
obj.m();