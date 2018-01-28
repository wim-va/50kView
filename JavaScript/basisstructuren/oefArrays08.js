'use strict';
var toetsenbord = require('readline-sync');
var telwoorden = ["nul","een", "twee", "drie", "vier", "vijf", "zes", "zeven", "acht", "negen", "tien"];
var cijfer = parseInt(toetsenbord.question("cijfer: "));
console.log("U hebt een %s ingetikt", telwoorden[cijfer]);

