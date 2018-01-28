'use strict';

var toetsenbord = require('readline-sync');

var getallen = [];  // array literal
var getal;
while(getallen.length < 5){
    getal = parseInt(toetsenbord.question('Geef een getal: '));
    if(getallen.indexOf(getal) >= 0){
        console.log("%d komt al voor in de getallenreeks!", getal);
    }
    else{
        getallen.push(getal);
    }
}
console.log('unieke getallen voor sortering: ', getallen);
getallen.sort();  // !!!!  niet juist; sort zonder argumenten sorteert alfabetisch
console.log('unieke getallen na standaardsortering: ', getallen);

// bubble sort
var gewisseld, tmp;
do{
    gewisseld = false;
    for(var i=0; i < getallen.length-1; i++){
        if( getallen[i] > getallen[i+1]){
            tmp = getallen[i];
            getallen[i] = getallen[i+1];
            getallen[i+1] = tmp;
            gewisseld = true;
        }
    }
}while (gewisseld);
console.log('unieke getallen na bubble sort', getallen);