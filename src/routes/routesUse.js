const express = require('express'),
    router = express.Router();

// Setting up the routes (RESTfull routes)
router.use(require('./home'));
router.use("/blogs", require('./index'));
router.use("/blogs", require('./new'));
router.use("/blogs", require('./create'));
router.use("/blogs", require('./show'));
router.use("/blogs", require('./edit'));
router.use("/blogs", require('./update'));
router.use("/blogs", require('./delete'));

module.exports = router;