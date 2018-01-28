'use strict';

function isSchrikkeljaar(jaar) {
    return jaar % 400 == 0 ? true :
        jaar % 100 != 0 ? jaar % 4 == 0 : false;
}

function eenOfGeen(een){
    return een ? "een" : "geen"; 
}

var jaar = 2000; 
console.log("%d is %s schrikkeljaar",jaar, eenOfGeen(isSchrikkeljaar(jaar)));
jaar = 1900;
console.log("%d is %s schrikkeljaar", jaar,eenOfGeen(isSchrikkeljaar(jaar)));
jaar = 2016;
console.log("%d is %s schrikkeljaar", jaar,eenOfGeen(isSchrikkeljaar(jaar)));
jaar = 2017;
console.log("%d is %s schrikkeljaar", jaar, eenOfGeen(isSchrikkeljaar(jaar)));