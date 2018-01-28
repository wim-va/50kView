'use strict';

var lijst = [];  // [] : array literal

var aantalElementen = lijst.length;
console.log("na creatie bevat lijst %d elementen", aantalElementen);

// 5 elementen toevoegen aan lijst
for (var i = 0; i < 5; i++) {
    lijst[i] = i + 1;
}
console.log("na toevoeging van 5 getallen bevat lijst %d elementen", lijst.length);

console.log("de elementen in omgekeerde volgorde:");
for (var i = lijst.length - 1; i >= 0; i--) {
    console.log(lijst[i]);
}

// eerste element overschrijven
lijst[0] = 111;

// laatste element overschrijven
lijst[ lijst.length-1 ] = "een vreemde eend";

console.log(lijst);

// lijst groter maken door een element toe te voegen op een positie die nog niet bestaat
lijst[ lijst.length + 1 ] = "in de bijt";
console.log(lijst);
console.log("elementen die geen waarde gekregen hebben zijn %s", lijst[ lijst.length-2 ] );
