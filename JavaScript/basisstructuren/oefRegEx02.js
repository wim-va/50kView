'use strict';

function zonderOpeenvolgendeSpaties(zin){
    return zin.replace(/ +/g, " ")
}

console.log(zonderOpeenvolgendeSpaties("Een twee  drie   ."));