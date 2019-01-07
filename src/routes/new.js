const express = require('express'),
    router = express.Router();

// New route
router.get("/new", function (req, res) {
    res.render("new");
});

module.exports = router;