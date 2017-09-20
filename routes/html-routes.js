// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/index", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // form route loads form.html
  app.get("/rookie-form", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/rookie-form.html"));
  });

  // user route loads user.html
  app.get("/rookie-schedule", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/rookie-schedule.html"));
  });

    // pro route loads pro.html
  app.get("/expert-schedule", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/expert-schedule.html"));
  });

    // proform route loads proform.html
  app.get("/expert-form", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/expert-form.html"));
  });

};
