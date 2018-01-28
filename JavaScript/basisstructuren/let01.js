// bron: https://egghead.io/lessons/the-let-keyword?course=learn-es6-ecmascript-2015

// gebruik van use strict is nodig om variabele te kunnen declareren met let
"use strict";

var verrassing = "and?";
{
	var verrassing = "what did you expect?";
}
console.log(verrassing);  // what did you expect?

var verrassing2 = "and?";
function f(){
	var verrassing2 = "what did you expect?";
}
console.log(verrassing2);  // and?

// sinds ES6 bestaat keyword let
// een variabele die met let gedeclareerd is, is enkel in de scope gekend
// (let creeert een nieuwe variabele)
let verrassing3 = "and?";
{
	let verrassing3 = "what did you expect?";
}
console.log(verrassing3);  // and?

var verrassing4 = "and?";
{
	let verrassing4 = "what did you expect?";
}
console.log(verrassing4);  // and?
 
let verrassing5 = "and?";
{
	//var verrassing5 = "what did you expect?";  // syntax error: 'verassing5' has already been declared
}
console.log(verrassing5);  // and?