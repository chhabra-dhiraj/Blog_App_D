const express = require('express'),
    router  = express.Router();

// Home page route
router.get("/", function (req, res) {
    res.redirect("/blogs");
});

module.exports = router;