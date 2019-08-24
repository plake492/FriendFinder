// Dependencies
//=============================================================
const express = require("express");
const path = require("path");
//=============================================================

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 8080;
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// =============================================================

// People DATA
// =============================================================
const people = [
  {
    routeName: "patricklake"
  }
]


app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, function() {
  console.log("Server is listening on PORT:http://localhost:" + PORT);
});