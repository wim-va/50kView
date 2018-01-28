var lijst1 = ["Volkswagen", "Audi", "Mercedes"];
var lijst2;

// gevraagd:
// zorg ervoor dat lijst2 een kopie is van lijst1
/*
// poging 1 (FOUTE OPLOSSING!  we maken geen kopie, maar kennen adressen toe)
lijst2 = lijst1;  // lijst1 en lijst2 zijn allebei namen voor dezelfde array
// ter controle:
lijst1[0] = "Skoda";
console.log(lijst1);
console.log(lijst2);
*/

/*
// poging 2
lijst2 = new Array(lijst1.length);
for(var i=0; i < lijst1.length; i++){
    lijst2[i] = lijst1[i];
}
// ter controle:
lijst1[0] = "BMW";
console.log(lijst1);
console.log(lijst2);
*/

// poging 3
lijst2 =  lijst1.slice();
// ter controle:
lijst1[0] = "BMW";
console.log(lijst1);
console.log(lijst2);