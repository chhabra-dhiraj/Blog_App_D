const express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'),
    sanitizer = require('sanitizer'),
    routerHelpers = require('../helpers/router_helpers');

const { createBlog, readBlogs, readBlogById, updateBlog, deleteBlog } = require('../../controllers/blogs');

router.use(bodyParser.urlencoded({ extended: true }));

// Read page route
router.get("/", async function (req, res) {
    try {
        const blogs = await readBlogs();
        res.render("blogs/index", { blogs: blogs });
    } catch (e) {
        throw e;
    }
});

// New page route
router.get("/new", function (req, res) {
    res.render("blogs/new");
});

// Show page route
router.get("/:id", async function (req, res) {
    try {
        const blog = await readBlogById(req.params.id);
        res.render("blogs/show", { singleBlog: blog });
    } catch (e) {
        throw e;
    }

});

// Edit page route
router.get("/:id/edit", async function (req, res) {
    try {
        const blog = await readBlogById(req.params.id);
        res.render("blogs/edit", { singleBlog: blog });
    } catch (e) {
        throw e;
    }

});

module.exports = router;