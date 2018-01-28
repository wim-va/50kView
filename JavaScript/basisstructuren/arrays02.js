'use strict';

// manieren om een array te maken

// array met gekende elementen
/*
var k3 = [];
k3[0] = "Karen";
k3[1] = "Kristel";
k3[2] = "Kathleen";
*/
// of korter:
var k3 = ["Karen", "Kristel", "Kathleen"];
console.log(k3);

// array constructor - versie 1 
var lijst = new Array();   // maak een lege array, maar is minder performant dan []
console.log("lijst gemaakt met array constructor:", lijst);

// array constructor - versie 2
// bij creatie doorgeven hoeveel elementen in de array zitten
var lijst2 = new Array(10);  // maak een array met 10 elementen
console.log("lijst2 is gemaakt met de array constructor (versie 2) en bevat %d elementen na creatie",
    lijst2.length);
for (var i = 0; i < lijst2.length; i++) {
    console.log( lijst2[i]  );
}

// array constructor - versie 3
// bij creatie elementen doorgeven
var nieuweK3 = new Array("Hanne", "Marthe", "Klaasje");
console.log(nieuweK3);

