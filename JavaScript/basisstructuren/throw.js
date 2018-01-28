'use strict';

function openFile(fileName) {
    console.log("File %s wordt geopend.", fileName);
}

function writeFile(fileName) {
    var getal = Math.random();
    if (getal > 0.5) {
        console.log("schrijven naar file %s.", fileName);
    }
    else {
        throw new Error("schrijven naar file " + fileName + " is mislukt");
    }
}

function closeFile(fileName) {
    console.log("File %s wordt gesloten", fileName);
}


var fileName = "hallo.txt";
openFile(fileName);
try {
    writeFile(fileName);
    console.log("klaar met schrijven");
}
catch(exception){
    console.log("oeps...");
    console.log(exception.message);
}
closeFile(fileName);
console.log("'t Is gedaan");