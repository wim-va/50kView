var buffer = new Buffer(10); // standaard wordt UTF-8 encoding gebruikt
console.log('buffer na creatie (bevat onvoorspelbare rommel):');
console.log(buffer.toString());
// er worden niet meer karakters naar een buffer geschreven dan de grootte
// die bij creatie opgegeven is
// write overschrijft inhoud van buffer
var len = buffer.write('een twee drie');  
console.log('buffer na write van '+ len +' karakters:');  // een twee d
console.log(buffer.toString());

// write overschrijft inhoud van buffer vanaf het begin,
// tenzij we een offset opgeven
buffer.write('dracht', 3);
console.log(buffer.toString());  // eendrachtd
// een buffer kan gebruikt worden als een array met karakters
buffer[9] = ' ';
console.log(buffer.toString());  // eendracht 

var buf = new Buffer(26);
for (var i = 0 ; i < 26 ; i++) {
  buf[i] = i + 97;
}

console.log( buf.toString('ascii'));       // outputs: abcdefghijklmnopqrstuvwxyz
console.log( buf.toString('ascii',0,5));   // outputs: abcde
console.log( buf.toString('utf8',0,5));    // outputs: abcde
console.log( buf.toString(undefined,0,5)); // encoding defaults to 'utf8', outputs abcde

var buf = new Buffer('Simply Easy Learning');
var json = buf.toJSON(buf);
console.log(json);