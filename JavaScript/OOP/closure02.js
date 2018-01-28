function outer(){
    var teller = 0;
    return {
        getTeller: function(){
            return teller;
        },
        verhoogTeller: function(){
            teller++;
        }
    }
}

var test = outer();
test.verhoogTeller();
var tel = test.getTeller();
console.log(tel);