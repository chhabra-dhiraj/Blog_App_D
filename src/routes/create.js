const express = require('express'),
    router = express.Router();

router.post("/", function(req, res) {
    res.redirect("/blogs");
});

module.exports = router;