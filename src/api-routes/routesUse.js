const express = require('express'),
    router = express.Router();


// Setting up the api routes (RESTfull routes)
router.use("/api/blogs", require('./index'));
router.use("/api/blogs", require('./create'));

module.exports = router;