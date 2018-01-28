'use strict';

// een literal staat tussen enkele of dubbele quotes
var s = "hello";   // s is een primitieve waarde
// literals zijn primitieve waarden (geen String-objecten)

// strings zijn 'immutable'
s.toUpperCase();
console.log(s);    // hello
console.log("Het woord %s bestaat uit %d karakters", s, s.length);

s = s.toUpperCase();
console.log(s);  // HELLO

// escape characters
s = "Zin1\nZin2";
console.log(s);
s = "c:\temp";
console.log(s); // c:	emp
s = "c:\\temp";
console.log(s); // c:\temp
s = "Zij zei:\"Goeiemorgen\"";
console.log(s);   // Zij zei:"Goeiemorgen"

// strings kunnen met de new operator ook gemaakt worden als String-objecten
// (dit zijn geen primitieve waarden!)
var s2 = new String(s);  // maak string object met inhoud s
console.log(s2);

// **************************
// strings vergelijken
// **************************
if (s == s2) {  // == vergelijkt de inhoud van strings
    console.log("s == s2");
}

if (s === s2) { // s is een primitieve waarde, s2 is een string object => verschillend type
    console.log("s === s2");
}

var s3 = new String(s);
if (s2 == s3) {  // 2 objecten op verschillend adres zijn steeds verschillend
    console.log("s2 == s3");
}

if (s3 === s2) {  // 2 objecten op verschillend adres zijn steeds verschillend
    console.log("s3 === s2");
}

if (s3.toString() == s2.toString()) {
    console.log("s3.toString() == s2.toString()");
}

var w1 = "aha", w2 = "nou moe";
if (w1 < w2) {
    console.log("%s komt alfabetisch voor %s", w1, w2);
}
else {
    console.log("%s komt alfabetisch niet voor %s", w1, w2);
}

// of met een fie:
var result = w1.localeCompare(w2);
if (result < 0) {
    console.log("%s komt alfabetisch voor %s", w1, w2);
}
else if (result == 0) {
    console.log("%s en %s zijn gelijk", w1, w2);
}
else {
    console.log("%s komt alfabetisch niet voor %s", w1, w2);
}
