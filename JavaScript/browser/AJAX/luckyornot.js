/*
 * get the content of a JSON file using Ajax 
 */

window.onload = init;

function init() {
	var button = document.getElementById("amilucky");
	button.onclick = getLuck;
}

function getLuck() {
	var url = "luckyornot.txt";  // ok (opvragen via webserver (surfen), werkt niet als je file opent in browser)
	// var url = "http://wickedlysmart.com/ifeelluckytoday";  // probleem: cross domain call
	 // mogelijke oplossingen vereisen allen server-side zaken (=> out-of-scope):
	 // 1) JSONP (in te stellen op server) van webservice  (zie gumball voorbeeld) OF
	 // 2) server van webservice configureren zd Access-Control-Allow-Origin in header zit OF
	 // 3) proxy server opzetten
	 var request = new XMLHttpRequest();
	request.onreadystatechange = function(){
		if(this.readyState == 4  && this.status == 200){
			displayLuck(request.responseText);
		}
	}
	request.open("GET", url);
	request.send();
}

function displayLuck(luck) {
	var p = document.getElementById("luck");
	p.innerHTML = luck;
}

