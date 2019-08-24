const http = require("http");
const fs = require("fs");
const PORT = 8080;
const server = http.createServer(handleRequest);
function handleRequest(req, res) {

  fs.readFile(__dirname + "/index.html", function(err, data) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
}

server.listen(PORT, function() {
  console.log("Server is listening on PORT:http://localhost:" + PORT);
});