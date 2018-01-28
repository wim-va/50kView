// zie https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is

/*
function Object.is determines whether two values are the same value. 
Two values are the same if one of the following holds:

    both undefined
    both null
    both true or both false
    both strings of the same length with the same characters
    both the same object
    both numbers and
        both +0
        both -0
        both NaN
        or both non-zero and both not NaN and both have the same value

*/

console.log('vergelijken met ==');
console.log('foo'=='foo');     // true
console.log('foo'=='bar');     // false
console.log(null==null);       // true
console.log("2"==2);            // true   !!!

// Special Cases
console.log(0==-0);            // true
console.log(-0==-0);           // true
console.log(NaN==0/0);         // false   !!!

console.log('vergelijken met ===');
console.log('foo'==='foo');     // true
console.log('foo'==='bar');     // false
console.log(null===null);       // true 
console.log("2"===2);            // false !!!

// Special Cases
console.log(0===-0);            // true
console.log(-0===-0);           // true
console.log(NaN===0/0);         // false   !!!

console.log('vergelijken met Object.is (ES6)');
console.log(Object.is('foo', 'foo'));     // true
console.log(Object.is('foo', 'bar'));     // false
console.log(Object.is(null, null));       // true
console.log(Object.is("2",2));            // false

// Special Cases
console.log(Object.is(0, -0));            // false !!!
console.log(Object.is(-0, -0));           // true 
console.log(Object.is(NaN, 0/0));         // true !!!