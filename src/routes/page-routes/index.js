const express = require('express'),
    router = express.Router();

// Setting up the routes (RESTfull routes)
router.use(require('./homeBlogs'));
router.use("/blogs", require('./blogs'));

module.exports = router;