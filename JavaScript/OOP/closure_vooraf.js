/* herhaling: lokale vs globale var */
'use strict';

var naam = "Joske";
schrijfGlobaleVar();
schrijfLokaleVar();

function schrijfGlobaleVar(){
    console.log(naam);
}

function schrijfLokaleVar(){
    var naam = "Jeanne";
    var naam2 = "Geraar";
    console.log(naam);
    console.log(naam2);
}