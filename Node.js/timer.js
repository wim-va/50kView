var sec = 3;
console.log("Binnen " + sec + " seconden start een timer die 1 maal uitgevoerd wordt");
var timer = setTimeout(function() {
	console.log("hallo!");
	}, sec * 1000);

timer = setInterval(function() {
	console.log("Om de 2 seconden verschijnt dit bericht");
	}, 2000);

console.log("We zullen de timer uitschakelen na 10 seconden");
setTimeout(function() {
	clearTimeout(timer);
	console.log("de timer is uitgeschakeld");
	}, 10000);