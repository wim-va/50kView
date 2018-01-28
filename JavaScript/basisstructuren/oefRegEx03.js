'use strict';

function naarAntwerps(zin){
    return zin.replace(/h/gi,'');
}

function naarLimburgs(zin){
    return zin.replace(/([aeiou])/gi, "$1$1");
}

var zin = "Heel goed hoor!";
console.log(naarAntwerps(zin));
console.log(naarLimburgs(zin));