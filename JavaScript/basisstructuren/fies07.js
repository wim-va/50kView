'use strict';

const MAXSCORE = 10;
var toetsenbord = require('readline-sync');

function leesPunten(vak){
    var punten;
    do{
        punten = parseFloat(toetsenbord.question("Geef punten voor "+vak+": "));
    }while (isNaN(punten) || punten < 0 || punten > MAXSCORE);
    return punten;
}

function minSlaagScorePerVak(){
    return (MAXSCORE/2) + 1;
}

function isGeslaagdVoorWiskunde(puntenWis){
    return puntenWis >= minSlaagScorePerVak() ;
}

function isGeslaagdVoorBoekhoudenEnInformatica(puntenBoekh, puntenInf){
    return puntenBoekh + puntenInf >= 2 * minSlaagScorePerVak();
}

function isGeslaagd(puntenWis, puntenBoekh, puntenInf){
    return isGeslaagdVoorWiskunde(puntenWis) && 
        isGeslaagdVoorBoekhoudenEnInformatica(puntenBoekh, puntenInf)
}

var puntenWis = leesPunten("wiskunde");
var puntenBoekh = leesPunten("boekhouden");
var puntenInf = leesPunten("informatica");
if (isGeslaagd(puntenWis, puntenBoekh, puntenInf)){
    console.log("geslaagd");
}
else{
    console.log("niet geslaagd om volgende reden(en):");
    if (!isGeslaagdVoorWiskunde(puntenWis)){
        console.log("onvoldoende voor wiskunde");
    }
    if(!isGeslaagdVoorBoekhoudenEnInformatica(puntenBoekh, puntenInf)){
        console.log("onvoldoende voor boekhouden en informatica");
    }
}