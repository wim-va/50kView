'use strict';

// functie oproepen voor functiedeclaratie
fie1();
// f();  // fout bij uitvoering want f is nog niet gekend

// functiedefinities = functiedeclaraties
function fie1(){
    console.log("fie1 wordt uitgevoerd");
}

function fie2(){
    console.log("nu wordt fie2 uitgevoerd");
}

// functies oproepen/uitvoeren
fie1();

// een function kan toegekend worden aan een var
// (die var wordt dan een alias voor de functiedeclaratie)
var f = fie1;
f();   // fie1 wordt uitgevoerd

f = function(){
    console.log("anonieme fie wordt uitgevoerd");
}
f();  // anonieme fie wordt uitgevoerd


function fieMetFunctionAlsParameter(eenFunctie){
    console.log("zo meteen wordt de doorgegeven function uitgevoerd");
    eenFunctie();
}

// een function kan gebruikt worden als argument:
fieMetFunctionAlsParameter( fie2 );
fieMetFunctionAlsParameter( f );
fieMetFunctionAlsParameter( function(){
    console.log("een anonieme functie als argument van een function");
});

// het resultaat/de uitkomst van een function kan een function zijn
function fieMetFunctionAlsUitkomst(){
    var getal = Math.random();
    if(getal < 0.5){
        return fie2;
    }
    return function(){
        console.log("deze anonieme function is de uitkomst van een andere function");
    }
}

var uitkomst = fieMetFunctionAlsUitkomst();  // uitkomst bevat een functiedef
uitkomst();
// zonder hulpvar:
fieMetFunctionAlsUitkomst()();
