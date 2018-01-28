'use strict';
var fiat = { 
    make: "Fiat",
    model: "500",
    year: 1957, 
    color: "Medium Blue",
    passengers: 2,
    convertible: false,
    mileage: 88000,
    started: false,
    start: function() {
		this.started = true;
	},
    stop: function() {
		this.started = false;
	},
    drive: function(distance = 0) {
		//
		// if we use started instead of this.started, 
		// our code doesn't work!
		// (javascript searches for a var (1) in local vars (2) in parameters (3) in global vars)
		//
		if (this.started) {
			console.log("Zoom zoom!");
			this.mileage += distance;
		} else {
			console.log("You need to start the engine first.");
		}
	}
};
fiat.drive();
console.log("mileage before ride: %d", fiat.mileage);
fiat.start();
fiat.drive(100);
fiat.stop();
console.log("mileage after ride: %d", fiat.mileage);