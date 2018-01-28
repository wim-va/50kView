'use strict';
var toetsenbord = require('readline-sync');
var breedtes = [60, 90, 120, 150, 200];
var indexNodigeBreedte = 0;
var breedte = parseFloat(toetsenbord.question("breedte: "));
while (indexNodigeBreedte < breedtes.length &&
    breedtes[indexNodigeBreedte] < breedte) {
    indexNodigeBreedte++;
}
if (indexNodigeBreedte == breedtes.length) {
    console.log("Helaas... wij verkopen geen gordijnen die breed genoeg zijn");
}
else {
    console.log("Voor gordijnen die %d cm breed zijn, moet je gordijnen met een breedte van %d cm kopen",
        breedte, breedtes[indexNodigeBreedte]);
}
