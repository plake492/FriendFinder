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
    routeName: "patricklake",
    name: "Patrick Lake",
    q1:5
    // q2:3,
    // q3:5,
    // q4:1,
    // q5:2,
    // attack: 100,
    // defense: 10
  },
  {
    routeName: "victorialake",
    name: "Victoria Lake",
    q1:5
    // q2:3,
    // q3:5,
    // q4:1,
    // q5:2,
    // attack: 100,
    // defense: 10
  },
  {
    routeName: "dangorden",
    name: "Dan Gorden",
    q1: 5
    // q2:3,
    // q3:5,
    // q4:1,
    // q5:2, 
    // attack: 200,
    // defense: 20
  },
];


app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/api/people", function(req, res) {
  return res.json(people);
});

app.get("/api/people/:people", function(req, res) {
  const chosen = req.params.people

  console.log(chosen);

  for (var i = 0; i < people.length; i++) {
    if (chosen === people[i].routeName) {
      return res.json(people[i]);
    }
  }

  return res.json(false);
});

// Add new person
app.post("/api/people", function(req, res) {
  
  let newPerson = req.body;

  newPerson.routeName = newPerson.name.replace(/\s+/g, "").toLowerCase();


  console.log(newPerson);
  people.push(newPerson);

  res.json(newPerson);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("Server is listening on PORT:http://localhost:" + PORT);
});