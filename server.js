// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
require("./routes/html-routes.js")(app);
require("./routes/appointments-api-routes.js")(app);
require("./routes/expert-api-routes.js")(app);
require("./routes/rookie-api-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
// var callback;

// exports.app = app;
// exports.waitOnServer = function (cb) {
// 	callback = cb;
// }

db.sequelize.sync({ }).then(function() {
  var server = app.listen(PORT, function() {
    console.log("App listening on PORT %s" + PORT);
  });
  // callback(server);
});