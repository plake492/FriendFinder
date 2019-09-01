const path = require("path");

module.exports = function(app) {

 app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../HTML/index.html"));
  });
  
  app.get("/all", function(req, res) {
    res.sendFile(path.join(__dirname, "../HTML/all.html"));
  });
  
  app.get("/matched", function(req, res) {
    res.sendFile(path.join(__dirname, "../HTML/matched.html"));
  });

  app.get("/attack", function(req, res) {
    res.sendFile(path.join(__dirname, "../HTML/attack.html"));
  });
};


