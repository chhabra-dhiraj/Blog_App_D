const express = require('express'),
    router = express.Router();

// Setting up the api routes (RESTfull routes)
router.use("/api/blogs", require('./blogs'));

module.exports = router;