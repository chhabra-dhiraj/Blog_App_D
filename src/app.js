// Importing all the npm packages.
const express = require('express'),
    app = express(),
    path = require('path'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    sanitizer = require('sanitizer'),
    moment = require('moment');

// Setting up the basic configuration.
app.set('view engine', 'ejs');
app.use('/', express.static(path.join(__dirname, '../public')))
app.set('views', path.join(__dirname, '../views'))
app.use(bodyParser.json({extended: true}));
app.use(methodOverride("_method"));

// Database Creation
mongoose.connect('mongodb://localhost/Blog_App_D_Database', {useNewUrlParser: true});

// api routes
app.use(require('./routes/api-routes/index.js'));

// app routes
app.use(require('./routes/page-routes/index.js'));

// Setting up the server (Making the server to listen to requests and respong accordingly).
app.listen("3000", function () {
    console.log("SERVER HAS STARTED");
});