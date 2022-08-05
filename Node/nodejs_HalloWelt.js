const http = require("http");

const hostname = "127.0.0.1";

const port = 59680;

const server = http.createServer((req, res) => {
		res.statusCode = 200;
		res.setHeader("Content-Type", "text/plain");
		res.end("Hallo Welt!");
	});
	
server.listen(port, hostname, () => {
	console.log("Webserver lauscht am Host " + hostname + " auf Port " + port + ".");
});