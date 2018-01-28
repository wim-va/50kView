String.reverse = function(string) {
    var result = "";
    for(var i= string.length-1; i >= 0; i--){
        result += string.charAt(i);
    }
    return result;
}

var zin = "wadisdadier";
console.log("%s achterstevoren is %s", zin, String.reverse(zin));