var http = require("http");
var dt = require("./index.js");

http.createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("The date and time are currently: " + dt.myDateTime() + "\n");
    res.end("Hello World again!");
}).listen(3400, function() {
    console.log("Node server is running...");
});



