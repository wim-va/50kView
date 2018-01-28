function Hond(naam, ras, gewicht) {
    this.naam = naam;
    this.ras = ras;
    this.gewicht = gewicht;
    /*
    this.blaf = function(){
    	if (this.gewicht < 10){
    		return "kefkefkefkefkef";
    	}
    	else{
    		if(this.gewicht > 30){
    			return "WOEFWOEF";
    		}
    		else{
    			return "waf";
    		}
    	}
    } 
    */
} 

Hond.prototype.blaf = function(){
	if (this.gewicht < 10){
		return "kefkefkefkefkef";
	}
	else{
		if(this.gewicht > 30){
			return "WOEFWOEF";
		}
		else{
			return "waf";
		}
	}
};

var fido = new Hond("Fido", "beagle", 38);
var fluffy = new Hond("Fluffy", "poedel", 30);
var flavie = new Hond("Flavie", "chihuahua", 9.5);
var honden = [fido, fluffy, flavie];

for(var i = 0; i < honden.length; i++) {
    var size = "kleine";
    if (honden[i].gewicht > 10) {
        size = "grote";
    }
    console.log(honden[i].naam 
                 , " is een " , size 
                 , " " + honden[i].ras);
    console.log(honden[i].blaf());
}


// functie hasOwnProperty returns true if the prop is (re)defined in an object instance 
// (not in the prototype)
var hasPropNaam = fido.hasOwnProperty("naam");  
console.log("hasProperty('naam') is ",hasPropNaam," voor ", fido.naam)
var hasPropBlaf = fido.hasOwnProperty("blaf");  
console.log("hasProperty('blaf') is ",hasPropBlaf," voor ", fido.naam)
var hasPropToString = fido.hasOwnProperty("toString");
console.log("hasProperty('toString') is ",hasPropToString," voor ", fido.naam);