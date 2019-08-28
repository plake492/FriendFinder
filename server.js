//=============================================================
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// =============================================================

require("./routes/routeHTML.js") (app)
require("./routes/routeAPI.js") (app)

// =============================================================
app.listen(PORT, function() {
  console.log("Server is listening on PORT:http://localhost:" + PORT);
});