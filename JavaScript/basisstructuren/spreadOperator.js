// bron: https://egghead.io/lessons/ecmascript-6-using-the-es6-spread-operator?course=learn-es6-ecmascript-2015

var a =[1,2,3];
console.log(a);  // [1,2,3]
// de spread operator (...) 
console.log(...a) // 1 2 3

// de spread operator is handig als de elementen uit een array als afzonderlijke parameters 
// doorgegeven moeten worden aan een functie
function f(x,y,z){
	console.log(x);
	console.log(y);
	console.log(z);
}
f(...a);  // 1  2  3 (op afzonderlijke lijnen)

var b = [4,5,6,7];
// alle elementen uit b toevoegen aan a
//b.forEach(x => a.push(x));
// of met spread operator:
a.push(...b);
console.log(a);

console.log("*************")