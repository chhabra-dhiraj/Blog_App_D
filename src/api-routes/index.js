const express = require('express'),
    router = express.Router();

const Blog = require('../models/blogs.js');

// index api route
router.get("/", function (req, res) {
    Blog.find({}, function (err, blogs) {
        if (err) {
            console.log("Something went wrong!!!");
            console.log(err);
        } else {
            res.json(blogs);
        }
    });
});

module.exports = router;