var fs = require("fs");

function toonInhoud(f) {
	fs.stat(f, function(err, stats) {
		console.log(f);
		if (stats.isDirectory()) {
			fs.readdir(f, function(err, files) {
				if (err) {
					return console.err('oeps...');
				}
				files.forEach(function(file) {
					toonInhoud(f+"\\"+file);
				});
			});
		} 
	});
}

toonInhoud("c:\\data\\db");