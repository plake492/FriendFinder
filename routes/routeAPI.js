
const people = require("../data/people")

module.exports = function(app) {
    
    app.get("/api/people", function(req, res) {
        return res.json(people);
    });
    
    app.get("/api/people/:people", function(req, res) {
        const chosen = req.params.people
  
        console.log(chosen);
  
        for (var i = 0; i < people.length; i++) {
            if (chosen === people[i].routeName) {
                return res.json(people[i]);
            };
        };
    return res.json(false);
    });
  
  app.post("/api/people", function(req, res) {
    let newPerson = req.body;
    newPerson.routeName = newPerson.name.replace(/\s+/g, "").toLowerCase();
    console.log(newPerson);
    people.push(newPerson);
    res.json(newPerson);
  });
};