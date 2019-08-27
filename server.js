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
    gender: "male",
    image: "https://scontent-ort2-1.xx.fbcdn.net/v/t31.0-8/22792269_10215150326294956_4078608217278741823_o.jpg?_nc_cat=110&_nc_oc=AQmKAINK-iOKKc9bxU10ru-4gGfflBOS2BjQBgR7vlc3LrqDB4nWUxHEYL9Xz_91CUo&_nc_ht=scontent-ort2-1.xx&oh=ffe4614586c81a4e78aeb513589eed97&oe=5DD6320D",
    q1:3,
    q2:5,
    qScore: this.q1 + this.q2,
    // attack: 100,
    // defense: 10
  },
  {
    routeName: "victorialake",
    name: "Victoria Lake",
    gender: "female",
    image: "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/60357727_2758951420843167_3516734323069812736_n.jpg?_nc_cat=107&_nc_oc=AQm8FjXruFVjMbhvzbFK2MzZHNOR4adO6QPbe4wBAISZdFGlSqdX-qzidDlWgmcEHuQ&_nc_ht=scontent-ort2-1.xx&oh=d682c65f9e4a142385d6a66af0abedfb&oe=5E0BA430",
    q1:3,
    q2:5,
    qScore: this.q1 + this.q2,
    // attack: 100,
    // defense: 10
  },
  {
    routeName: "dangorden",
    name: "Dan Gorden",
    gender: "male", 
    image: "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/64577341_10162973682210643_7307563876898308096_o.jpg?_nc_cat=110&_nc_oc=AQnt1zUE4vWbpTlEJQQpZGUB67ouMFGJ7cDPDyCC3xcfn3R4IPw0VP9TI3CrR5wiiaM&_nc_ht=scontent-ort2-1.xx&oh=4e43d056bb964108d7bb40149754328d&oe=5DD3FD2B",
    q1:5,
    q2:1,
    qScore: 0
    // attack: 200,
    // defense: 20
  },
  {
    gender: "Male",
    image: "https://cdn.editorchoice.com/wp-content/uploads/2019/07/Chuck-Norris.jpg",
    name: "Chuck Norris",
    q1: "5",
    q2: "5",
    qScore: 0
  },
  {
    gender: "Male",
    image: "https://cdn3.movieweb.com/i/article/Qy30diLM0BOHqsVgXb3fXzKPj2a5Gn/1200:100/Knight-Rider-Reboot-James-Gunn-David-Hasselhoff.jpg",
    name: "David Hasselhoff",
    q1: "3",
    q2: "2",
    qScore: 0
  }
];

for (let i = 0; i < people.length; i++) {
    console.log(people[i])
    people[i].qScore = people[i].q1 + people[i].q2
}


app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/all", function(req, res) {
  res.sendFile(path.join(__dirname, "all.html"));
})

app.get("/matched", function(req, res) {
  res.sendFile(path.join(__dirname, "matched.html"));
})

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