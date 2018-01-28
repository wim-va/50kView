var http = require('http');
http.createServer(function handler(req, res) {
	console.log('request received');
	
	// Send the HTTP header 
	// HTTP Status: 200 : OK
    res.writeHead(200, {'Content-Type': 'text/plain'});
    
    // Send the response body
    res.end('Hello World\n');
}).listen(1337, '192.168.23.104');
console.log('Server running at http://192.168.23.104:1337/');
