const express = require('express'),
    router = express.Router();

const Blog = require('../models/blogs.js');

// Delete route
router.delete("/:id", function (req, res) {
    Blog.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            console.log("Delete Unsuccessful");
            console.log(err);
        } else {
            res.redirect("/blogs");
        }
    });
});

module.exports = router;