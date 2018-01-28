window.onload = function() {
	if (Worker == "undefined") {
		document.getElementById("output").innerHTML = "Bummer, no Web Workers";
	}
	else {
		var worker = new Worker("worker.js");

		worker.postMessage("ping");

		worker.onmessage = function(event) {
			var message = "Worker says " + event.data;
			document.getElementById("output").innerHTML = message;
		}
		worker.onerror = function(error) {
			document.getElementById("output").innerHTML =
				"There was an error in " + error.filename + 
				" at line number " + error.lineno +
				": " + error.message;
		};
	}
}
