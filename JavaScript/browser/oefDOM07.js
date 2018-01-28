'use strict';

window.onload = init;

function init() {
    var btnSorteer = document.getElementById("btnSorteer");
    btnSorteer.onclick = sortering;
}

var namen = new Array(5);
function sortering() {
    ophalen();
    sorteren();
    terugzetten();
}
function ophalen() {
    for (var i = 0; i < namen.length; i++) {
        var z = "naam" + (i + 1);
        z = document.getElementById(z);
        namen[i] = z.value;
    }
}
function sorteren() {
    namen.sort();
}
function terugzetten() {
    for (var y = 0; y < namen.length; y++) {
        var z = "naam" + (y + 1);
        z = document.getElementById(z);
        z.value = namen[y];
    }
}
