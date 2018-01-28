'use strict';

/*
functions are first class values.  You can
- assign the value/function to a variable
- pass the value/function as an argument to a function
- return the value/function from a function
*/

var passengers = [{ name: "Jane Doloop", paid: true, ticket: "coach" },
{ name: "Dr. Evel", paid: true, ticket: "firstclass" },
{ name: "Sue Property", paid: false, ticket: "firstclass" },
{ name: "John Funcall", paid: true, ticket: "premium" }];

function isPassengerslistOk(passengers, testNotOk) {
    for (var i = 0; i < passengers.length; i++) {
        if (testNotOk(passengers[i])) {
            return false;
        }
    }
    return true;
}
function checkNoFlyList(passenger) {
    return (passenger.name === "Dr. Evel");
}
function checkNotPaid(passenger) {
    return (!passenger.paid);
}
function printPassenger(passenger) {
    var message = passenger.name;
    if (passenger.paid) {
        message = message + " has paid";
    } else {
        message = message + " has not paid";
    }
    console.log(message);
    return false;
}

// different scenarios to decide whether a plane can fly or not

// plane can only fly if every passenger is on the fly list
var allCanFly = isPassengerslistOk(passengers, checkNoFlyList);
if (!allCanFly) {
    console.log("The plane can't take off: we have a passenger on the no fly list.");
}

// plane can only fly if every passenger has paid
var allPaid = isPassengerslistOk(passengers, checkNotPaid);
if (!allPaid) {
    console.log("The plane can't take off: not everyone has paid.");
}

// we don't care about the result here; we're just using 
// isPassengerslistOk to display the passenger list
isPassengerslistOk(passengers, printPassenger);


function createDrinkOrder(passenger) {
    var orderFunction;
    if (passenger.ticket === "firstclass") {
        orderFunction = function () {
            console.log(passenger.name, ", would you like a cocktail or wine?");
        };
    } else if (passenger.ticket === "premium") {
        orderFunction = function () {
            console.log("Would you like wine, cola or water?");
        };
    } else {
        orderFunction = function () {
            console.log("Your choice is cola or water.");
        };
    }
    return orderFunction;
}
function createDinnerOrder(passenger) {
    var orderFunction;
    if (passenger.ticket === "firstclass") {
        orderFunction = function () {
            console.log(passenger.name, ", would you like chicken or pasta?");
        };
    } else if (passenger.ticket === "premium") {
        orderFunction = function () {
            console.log("Would you like a snack box or cheese plate?");
        };
    } else {
        orderFunction = function () {
            console.log("Would you like peanuts or pretzels?");
        };
    }
    return orderFunction;
}

function pickupTrash(passengers) {
    for (var i = 0; i < passengers.length; i++) {
        console.log("Can I have your trash, please?");
    }
}

function serveDrinks(passengers) {
    for (var i = 0; i < passengers.length; i++) {
        var getDrinkOrderFunction = createDrinkOrder(passengers[i]);
        getDrinkOrderFunction();
    }
}

function serveDinner(passengers) {
    for (var i = 0; i < passengers.length; i++) {
        createDinnerOrder(passengers[i])();
    }
}

function servePassengers(passengers) {
    serveDrinks(passengers);
    serveDinner(passengers);
    serveDrinks(passengers);
    // show movie
    serveDrinks(passengers);
    pickupTrash(passengers);
}

servePassengers(passengers);