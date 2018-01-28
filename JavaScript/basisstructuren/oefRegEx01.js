'use strict';

function zetSpatieNaKomma(zin){
    return zin.replace(/,/g, ", ")
}

console.log(zetSpatieNaKomma("Jan,die hier woont,is weg."));