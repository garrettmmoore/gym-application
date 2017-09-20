// Requiring our models
var db = require("../models");

module.exports = function(app) {
  
app.post("/expert", function(req, res) {
    db.Expert.create({
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