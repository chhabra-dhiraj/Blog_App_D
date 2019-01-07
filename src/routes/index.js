const express = require('express'),
    router = express.Router(),
    request = require('request');

// Index route
router.get("/", function (req, res) {
    request("http://localhost:3000/api/blogs", function (error, response, body) {
        if (!error && response.statusCode === 200) {
            var blogs = JSON.parse(body);
            res.render("index", {blogs: blogs});
        } else {
            console.log("Problem with api :(");
            console.log(error);
        }
    });
});

module.exports = router;