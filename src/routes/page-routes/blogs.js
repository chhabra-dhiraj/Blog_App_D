const express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'),
    sanitizer = require('sanitizer');

const {createBlog, readBlogs, readBlogById, updateBlog, deleteBlog} = require('../../controllers/blogs');

router.use(bodyParser.urlencoded({extended: true}));

// Read page route
router.get("/", async function (req, res) {
    try {
        const blogs = await readBlogs();
        if (req.params.error) {
            res.render("blogs/index", {blogs: blogs, error: "url"});
        } else {
            res.render("blogs/index", {blogs: blogs, error: ""});
        }
    } catch (e) {
        throw e;
    }
});

// New page route
router.get("/new", function (req, res) {
    res.render("blogs/new");
});

// Create page route
router.post("/", async function (req, res) {
    if (validURL(req.body.image)) {
        const newBlog = {
            title: req.body.title,
            image: req.body.image,
            body: sanitizer.sanitize(req.body.body)
        };

        try {
            const blog = await createBlog(newBlog);
            res.redirect("/blogs/" + blog._id);
        } catch (e) {
            throw e;
        }
    } else {
        res.redirect("/blogs?error=true");
    }

});

function validURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !!pattern.test(str);
}

// Show page route
router.get("/:id", async function (req, res) {
    try {
        const blog = await readBlogById(req.params.id);
        res.render("blogs/show", {singleBlog: blog});
    } catch (e) {
        throw e;
    }

});

// Edit page route
router.get("/:id/edit", async function (req, res) {
    try {
        const blog = await readBlogById(req.params.id);
        res.render("blogs/edit", {singleBlog: blog});
    } catch (e) {
        throw e;
    }

});

// Update page route
router.put("/:id", async function (req, res) {
    const newBlog = {
        title: req.body.title,
        image: req.body.image,
        body: sanitizer.sanitize(req.body.body)
    };

    try {
        const blog = await updateBlog(req.params.id, newBlog);
        res.redirect("/blogs/" + req.params.id);
    } catch (e) {
        throw e;
    }

});

// Delete page route
router.delete("/:id", async function (req, res) {
    try {
        const blog = await deleteBlog(req.params.id);
        res.redirect("/blogs");
    } catch (e) {
        throw e;
    }
});

module.exports = router;