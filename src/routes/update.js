const express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'),
    sanitizer = require('sanitizer');

router.use(bodyParser.urlencoded({extended: true}));

const Blog = require('../models/blogs.js');


// Update route
router.put("/:id", function (req, res) {
    const newBlog = {
        title: req.body.title,
        image: req.body.image,
        body: sanitizer.sanitize(req.body.body)
    };

    Blog.findByIdAndUpdate(req.params.id, newBlog, function (err, blog) {
        if (err) {
            console.log(err);
        } else {
            console.log(blog);
            res.redirect("/blogs/" + req.params.id);
        }
    });
});

module.exports = router;