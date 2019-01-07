const express = require('express'),
    router = express.Router();

const Blog = require('../models/blogs.js');

// Edit route
router.get("/:id/edit", function (req, res) {
    Blog.findById(req.params.id, function (err, blog) {
        if (err) {
            console.log(err);
        } else {
            res.render("edit", {singleBlog: blog});
        }
    });
});

module.exports = router;