var http = require("http")
var port = 8081
http.createServer(requestListener).listen(port)
console.log("Server is listening on", port)

function requestListener(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    console.log("Request received, responding now ...");
    res.end("Hello");
}
