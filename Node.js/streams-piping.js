var fs = require("fs");

// Create a readable stream
var readerStream = fs.createReadStream('input.txt');

// Create a writable stream
var writerStream = fs.createWriteStream('output2.txt');

// Pipe the read and write operations
// read input.txt and write data to output2.txt
readerStream.pipe(writerStream);

console.log("Program Ended");