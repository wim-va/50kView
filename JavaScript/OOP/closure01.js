/* inner function met closure */

function outer(){
    var naam = "Joske";
    function inner(){
        console.log(naam);
    }
    return inner;
}

var test = outer();
test();