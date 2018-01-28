'use strict';

const AANTALKOERSEN = 4, REFERENTIEKOERS = 10;

function Fortis() {
    this.koersen = [];
}

Fortis.prototype.voegKoersToe = function (koers) {
    if (this.koersen.length < AANTALKOERSEN) {
        this.koersen.push(koers);
    }
}

Fortis.prototype.maxCoupon = function () {
    return REFERENTIEKOERS - this.gemiddeldeKoers();
}

Fortis.prototype.gemiddeldeKoers = function () {
    var som = 0;
    for (var i = 0; i < this.koersen.length; i++) {
        som += this.koersen[i];
    }
    return som / this.koersen.length;
}


var fortis = new Fortis();
fortis.voegKoersToe(2);
fortis.voegKoersToe(1.75);
fortis.voegKoersToe(1.85);
fortis.voegKoersToe(2.01);
fortis.voegKoersToe(3);
console.log("De maximum coupon is %d", fortis.maxCoupon());