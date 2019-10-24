const express = require('express'),
    router = express.Router();

// Setting up the api routes (RESTfull routes)
router.use("/api/blogs", require('./blogs'));
router.use("/api/users", require('./users'));

module.exports = router;