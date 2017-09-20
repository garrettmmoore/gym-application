// Requiring our models
var db = require("../models");

module.exports = function(app) {

  // POST route for adding new Rookie to the rookie table
  app.post("/rookie", function(req, res) {
    db.Rookie.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      userName: req.body.userName,
      photo: req.body.photo,
      userType: req.body.userType,
      gym: req.body.gym
    }).then(function(results) {
      res.json(results);
    })
  });
};