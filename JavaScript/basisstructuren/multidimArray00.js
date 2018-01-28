'use strict';
const AANTALRIJEN = 4, AANTALKOLOMMEN = 3;

// declaratie en creatie van een 2-dim array
var speelbord = new Array(AANTALRIJEN);
for(var i=0; i<speelbord.length; i++){
    speelbord[i] = new Array(AANTALKOLOMMEN);
}

for(var i=0; i<speelbord.length; i++){  // rijen overlopen
    for(var j=0; j<AANTALKOLOMMEN; j++ ){  // kolommen overlopen
        speelbord[i][j] = parseInt((i+1)+""+(j+1)); 
    }
}

// ter controle
console.log(speelbord);

// array op scherm tonen
var result = "";
for(var i=0; i<speelbord.length; i++){  // rijen overlopen
    for(var j=0; j<speelbord[i].length; j++ ){  // kolommen overlopen
        result += speelbord[i][j] + " ";    
    }
    result += "\n";  // ga naar nieuwe lijn
}
console.log(result);

// suggestie van Samir om array op scherm te tonen: met spread operator
// (voor de liefhebbers) ;-)
console.log("met spread operator")
for(var i=0; i<speelbord.length; i++){  // rijen overlopen
    var rij = speelbord[i];
    console.log(...rij);
}