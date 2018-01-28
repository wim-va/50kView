'use strict';

function f1(x){
    // bij oproep van een fie wordt voor elke param
    // een nieuwe var gemaakt binnen de fie.
    // op het einde van de fie verdwijnt deze "parametervariabele"
    console.log("x in fie voor wijziging:",x);
    x++;
   console.log("x in fie na wijziging:",x);
   // return undefined
}

//(actueel) arg met andere naam dan (formele) param
var w = 1;
console.log("w voor oproep:",w);  // 1
f1(w);
console.log("w na oproep:",w);  // 1

//(actueel) arg met zelfde naam als (formele) param
var x = 1;
console.log("x voor oproep:",x);   // 1
f1(x);
console.log("x na oproep:",x);

// param met zelfde naam als lokale var
// => lokale var wordt gebruikt in fie
function f2(x){
    var x = 12;
    // "paramvariabele" x wordt overschreven met lokale var x
    console.log("x in fie2 voor wijziging:",x);
    x++;
   console.log("x in fie2 na wijziging:",x);
}
f2(5);

function f3(){
    console.log("x in f3 voor wijziging: %s", x);
    x++;   // globale var wordt gebruikt
    console.log("x in f3 na wijziging: %s", x);
}

f3();
console.log("x na oproep van f3: %s", x);


/*
    als we binnen een fie een var gebruiken zoekt js in deze volgorde naar de var tot hij gevonden is:
    1. lokale var
    2. parameter
    3. globale var
*/