var fs = require("fs");
var zlib = require('zlib');

// Decompress the file input.txt.gz to input.txt
fs.createReadStream('bestanden/input.txt.gz').pipe(zlib.createGunzip())
// .pipe(fs.createWriteStream('bestanden/input2.txt'));
.pipe(process.stdout);

console.log("File Decompressed.");