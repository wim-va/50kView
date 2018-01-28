// idee: "Head First JavaScript", O'Reilly
'use strict';
var fiat = { 
    make: "Fiat",
    model: "500",
    year: 1957, 
    color: "Medium Blue",
    passengers: 2,
    convertible: false,
    mileage: 88000,
    drive: function() {
			console.log("Zoom zoom!");
	}
};
var carColor = fiat.color;
console.log("Going for a ride with a %s %s %s",carColor, fiat.make, fiat.model);
fiat.mileage += 100;
fiat.drive();
console.log("mileage after ride: %d", fiat.mileage);
