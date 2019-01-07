const express = require('express'),
    router = express.Router();

const Blog = require('../models/blogs.js');

// Show route
router.get("/:id", function (req, res) {
    Blog.findById(req.params.id, function (err, blog) {
        if (err) {
            console.log(err);
        } else {
            res.render("show", {singleBlog: blog});
        }
    });
});

module.exports = router;