'use strict';

Number.pad = function(num, size, char){
    var result = ""+num;
    while(result.length < size)
        result = char + result;
    return result;
}

var getal = 5;
console.log(Number.pad(getal, 2, '0'));
getal = 10;
console.log(Number.pad(getal, 2, '0'));
getal = 100;
console.log(Number.pad(getal, 2, '0'));
console.log(Number.pad(getal, 4, '0'));
