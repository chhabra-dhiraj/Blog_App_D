const express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'),
    sanitizer = require('sanitizer');

router.use(bodyParser.urlencoded({extended: true}));

const Blog = require('../models/blogs.js');

// create api route
router.post("/", function (req, res) {
    const requestbody = req.body;
    console.log(requestbody);
    const newBlog = {
        title: requestbody.title,
        image: requestbody.image,
        body: sanitizer.sanitize(requestbody.body)
    };

    Blog.create(newBlog, function (err, blog) {
        if (err) {
            console.log("Error!!");
            console.log(err);
        } else {
            console.log(blog);
        }
    });

    res.send({err: 0, redirectUrl: "/blogs"});

});

module.exports = router;