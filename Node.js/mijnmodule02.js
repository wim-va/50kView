'use strict';

function Ding(p1) {
    this.naam = "Je kent mij nog niet";
    this.eigenschap = p1;
}

Ding.prototype.m = function () {
    console.log(this.naam, ", maar ", this.eigenschap);
};

module.exports = Ding;