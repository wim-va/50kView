String.format = function() {
    // The string containing the format items (e.g. "%1")
    // will and always has to be the first argument.
    var result = arguments[0];
    
    // start with the second argument (i = 1)
    for (var i = 1; i < arguments.length; i++) {
        // "gm" = RegEx options for Global search (more than one instance)
        // and for Multiline search
        var regEx = new RegExp("%" + i , "gm");
        result = result.replace(regEx, arguments[i]);
    }
    
    return result;
}


var s = "Hier komt een woord: %1 \nnogmaals dat woord: %1\nen nog een ander woord: %2";
var s2 =  String.format(s,"hello", "world");
console.log(s2);
