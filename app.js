// Importing all the npm packages.
var express = require('express'),
	app     = express(),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser'),
	methodOverride = require('method-override'),
	moment = require('moment');

// Setting up the basic configuration.
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(methodOverride("_method"));

// *Database setting*
// =============================================================

// Databse Creation
mongoose.connect('mongodb://localhost/Blog_App_D_Database', {useNewUrlParser: true});

// Data scheme defining
var blogSchema = new mongoose.Schema({
	title: String,
	image: String,
	body: String,
	dateCreated: {type: String, default: moment().format()}
});

// Modelling the  blogScheme
var Blog = mongoose.model('Blog', blogSchema);

// =============================================================

// *Setting up the routes (RESTfull routes)*
// =============================================================

// Home page route
app.get("/", function(req, res) {
	res.redirect("/blogs");
});

// Index route
app.get("/blogs", function(req, res) {
	Blog.find({}, function(err, blogs) {
		if(err) {
			console.log(err);
		} else {
			res.render("index", {blogs: blogs});
		}
	});
	
});

// New route
app.get("/blogs/new", function(req, res) {
	res.render("new");
});

// Create route
app.post("/blogs", function(req, res) {
	console.log(req.body);
	var newBlog = {
		title: req.body.title, 
		image: req.body.image,
		body: req.body.body
	};

	Blog.create(newBlog, function(err, blog) {
		if(err) {
			console.log("Error!!");
			console.log(err);
		} else {
			console.log(blog);
			res.redirect("/blogs");
		}
	});	
});

// Show route
app.get("/blogs/:id", function(req, res) {
	Blog.findById(req.params.id, function(err, blog) {
		if(err) {
			console.log(err);
		} else {
			res.render("show", {singleBlog: blog});
		}
	});
});

// Edit route
app.get("/blogs/:id/edit", function(req, res) {
	Blog.findById(req.params.id, function(err, blog) {
		if(err) {
			console.log(err);
		} else {
			res.render("edit", {singleBlog: blog});
		}
	});
});

// Update route
app.put("/blogs/:id", function(req, res) {
	var newBlog = {
		title: req.body.title, 
		image: req.body.image,
		body: req.body.body
	};

	Blog.findByIdAndUpdate(req.params.id, newBlog, function(err, blog) {
		if(err) {
			console.log(err);
		} else {
			console.log(blog);
			res.redirect("/blogs/" + req.params.id);
		}
	});
});

// Delete route
app.delete("/blogs/:id", function(req, res) {
	Blog.findByIdAndRemove(req.params.id, function(err) {
		if(err) {
			console.log("Delete Unsuccessful");
			console.log(err);
		} else {
			res.redirect("/blogs");
		}
	});
});

// =============================================================

// Setting up the server (Making the server to listen to requests and respong accordingly).
app.listen("3000", function() {
	console.log("SERVER HAS STARTED");
});