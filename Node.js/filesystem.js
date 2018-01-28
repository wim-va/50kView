var fs = require("fs");

console.log("*** inhoud van C:\\eclipse ***");
fs.readdir("c:\\eclipse", function(err, files) {
	if (err) {
		return console.err('oeps...');
	}
	files.forEach(function(file) {
		fs.stat("c:\\eclipse\\" + file, function(err, stats) {
			if (stats.isDirectory()) {
				console.log("DIR " + file);
			}
			else{
				// if (stats.isFile()) {
					console.log(file);			
				//}
			}
		});
	});
});
