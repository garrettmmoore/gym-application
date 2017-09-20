// Requiring our models
var db = require("../models");

module.exports = function(app) {
    
    app.post("/setappointment", function(req, res) {
        db.Appointments.create({
            userName: req.body.userName,
            gym: req.body.gym,
            photo: req.body.photo,
            month: req.body.month,
            day: req.body.day,
            time: req.body.time,
            am_pm: req.body.am_pm
        }).then(function(results) {
            res.json(results);
        })
    });

    app.get("/appointments/rookie/:username/:gymId", function(req, res) {
        console.log("THIS IS MY REQ:" + req.params.gymId + "" + req.params.username);
        db.Appointments.findAll({
          where: {
            RookieUserName: null,
            gym: req.params.gymId,
            // userName: !req.params.username
          },
        }).then(function(results) {
          res.json(results);
        });
      });

      app.get("/appointments/expert/:username/:gymId", function(req, res) {
        console.log("THIS IS MY REQ:" + req.params.gymId + "" + req.params.username);
        db.Appointments.findAll({
          where: {
            ExpertUserName: null,
            gym: req.params.gymId,
            // userName: !req.params.username
          },
        }).then(function(results) {
          res.json(results);
        });
      });

      app.get("/appointments/:username", function(req, res) {
        console.log("THIS IS MY Appointments REQ:" + req.params.username);
        db.Appointments.findAll({
          where: {
            userName: req.params.username,
          },
        }).then(function(results) {
          res.json(results);
        });
      });
    }
  //   app.put("/appointments/rookie/usr/:username/appt/:apptId", function(req, res) 
  //   {
  //     console.log("THIS IS MY REQ: " + req.params.username + "" + req.params.apptId);
  //     db.Appointments.update({
  //     where: {
  //          RookieUserName: null,
  //          gym: req.params.gymId,
  //          id: apptId,
  //                  // userName: !req.params.username
  //                },
  //              }).then(function(results) {
  //                 res.json(results);
  //             });

  //   });
  