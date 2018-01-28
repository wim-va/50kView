'use strict';

function isPerfectGetal(getal) {
    var somFactoren = 0;
    for (var i = 1; i < getal; i++) {
        if (getal % i == 0) {
            somFactoren+=i;
        }
    }
    return getal == somFactoren;
}

for (var i = 1; i <= 1000; i++) {
    if (isPerfectGetal(i)) {
        console.log("%d is een perfect getal", i);
    }
}