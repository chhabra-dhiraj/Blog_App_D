// Importing all the npm packages.
var express = require("express"),
	app     = express();

// Setting up the basic configuration.
app.set("view engine", "ejs");
app.use(express.static("public"));

// *Setting up the routes (RESTfull routes)*
// =============================================================

// Home page route
app.get("/", function(req, res) {
	res.redirect("/blogs");
});

// Index route
app.get("/blogs", function(req, res) {
	res.render("index");
});

// Setting up the server (Making the server to listen to requests and respong accordingly).
app.listen("3000", function() {
	console.log("SERVER HAS STARTED");
});

// =============================================================