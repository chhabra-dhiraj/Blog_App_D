// Importing all the npm packages.
const express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    sanitizer = require('sanitizer'),
    request = require('request'),
    queryString = require('querystring'),
    moment = require('moment');

// Setting up the basic configuration.
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.json({extended: true}));
app.use(methodOverride("_method"));

// *Database setting*
// =============================================================

// Database Creation
mongoose.connect('mongodb://localhost/Blog_App_D_Database', {useNewUrlParser: true});

// api routes
app.use(require('./api-routes/routesUse.js'));

// app routes
app.use(require('./routes/routesUse.js'));

// Setting up the server (Making the server to listen to requests and respong accordingly).
app.listen("3000", function () {
    console.log("SERVER HAS STARTED");
});