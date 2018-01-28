// bron: https://egghead.io/lessons/arrow-function?course=learn-es6-ecmascript-2015

var greeting = function(message, name){
	return message + ", " + name;
}; 
console.log(greeting("Hello", "Baptist"));

// sinds ES6 kunnen we de arrow functie gebruiken om een anonieme functie te definieren:
// vervang sleutelwoord function links van de parameterlijst door => rechts van de parameterlijst:
var greetingWithArrowFunction = (message, name) => {
	return message + ", " + name;
};
console.log(greetingWithArrowFunction ("Hello again", "Baptist"));

// als binnen de accolades van de arrow-functie uitsluitend 1 return statement staat, 
// mogen de accolades en het sleutelwoord return weggelaten worden:
var greetingWithArrowFunction2 = (message, name) =>	message + ", " + name;
console.log(greetingWithArrowFunction2 ("Another Hello", "Baptist"));

// als er juist 1 parameter is, mogen de ronde haakjes rond de parameterlijst weggelaten worden:
var greetingWithArrowFunction3 =  name =>	"Nice to meet you, " + name;
console.log(greetingWithArrowFunction3 ("Baptist"));

var square = x => x*x;
console.log(square(10));

// arrow functies zijn handig om een anonieme inner function te definieren, bv als event-handler
// zonder arrow functie:
var deliveryBoy = {
	name: "Baptist",
	handleMessage: function(message, handler){
		handler(message);
	},
	receive: function(){
		var that=this;
		this.handleMessage("Hello", function(message){
		//console.log(message + " " + this.name);  // this.name is undefined, since name is not defined in this scope
		console.log(message + " " + that.name);
		});
	}
};
deliveryBoy.receive();

// met arrow functie 
var deliveryBoyWithArrowFunction = {
	name: "Baptist",
	handleMessage: function(message, handler){
		handler(message);
	},
	receive: function(){
		// geen hulpvar nodig om naar "juiste this" te verwijzen
		this.handleMessage("Hello", 
				message => console.log(message + " " + this.name)
				); 
	}
};
deliveryBoyWithArrowFunction.receive();