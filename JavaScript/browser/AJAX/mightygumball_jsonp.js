/*
 * get the content of a JSON file using JSONP
 * update every 3 seconds.
 */
var lastReportTime = 0;

window.onload = init;

function init() {
	var interval = setInterval(handleRefresh, 3000);
	handleRefresh();
}

function handleRefresh() {
	var url = "http://gumball.wickedlysmart.com" +
				 "?callback=updateSales" +
				"&lastreporttime=" + lastReportTime  // om dubbels te vermijden
				"&random=" + (new Date()).getTime();  // om unieke url te verkrijgen zodat browser geen gecachte info toont
	var newScriptElement = document.createElement("script");
	newScriptElement.setAttribute("src", url);
	newScriptElement.setAttribute("id", "jsonp");
	var oldScriptElement = document.getElementById("jsonp");
	var head = document.getElementsByTagName("head")[0];
	
	// als script-elt met src aan DOM-tree toegevoegd wordt, wordt
	// script in src geladen en uitgevoerd
	if (oldScriptElement == null) {
		head.appendChild(newScriptElement);
	}
	else {
		head.replaceChild(newScriptElement, oldScriptElement);
	}
}

function updateSales(sales) {
	var salesDiv = document.getElementById("sales");
	for (var i = 0; i < sales.length; i++) {
		var sale = sales[i];
		var div = document.createElement("div");
		div.setAttribute("class", "saleItem");
		div.innerHTML = sale.name + " sold " + sale.sales + " gumballs";
		//salesDiv.appendChild(div);
		if (salesDiv.childElementCount == 0) {
			salesDiv.appendChild(div);
		}
		else {
			salesDiv.insertBefore(div, salesDiv.firstChild);
		}
	}

	if (sales.length > 0) {
		lastReportTime = sales[sales.length-1].time;
	}
}


