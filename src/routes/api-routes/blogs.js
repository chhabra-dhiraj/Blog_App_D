const express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'),
    sanitizer = require('sanitizer'),
    routerHelpers = require('../helpers/router_helpers');

const { createBlog, readBlogs, readBlogById, updateBlog, deleteBlog } = require('../../controllers/blogs');

router.use(bodyParser.urlencoded({ extended: true }));

// Read api route
router.get("/", async function (req, res) {
    try {
        const blogs = await readBlogs();
        res.status(200).json(blogs);
    } catch (e) {
        throw e;
    }

});

// Create api route
router.post("/", async function (req, res) {
    let error = routerHelpers.getError(req.body.title, req.body.image, req.body.body)
    const newBlog = {
        title: req.body.title,
        image: req.body.image,
        body: sanitizer.sanitize(req.body.body)
    }

    if (!error) {
        try {
            const blog = await createBlog(newBlog);
            res.status(200).send({ blog: blog });
        } catch (e) {
            res.status(400).send({ error: { header: 'Creation Failed!', message: 'Please try again after sometime.' } });
        }
    } else {
        res.status(400).send({ error: error });
    }
});

// Show api route
router.get("/:id", async function (req, res) {
    try {
        const blog = await readBlogById(req.params.id);
        res.status(200).json(blog);
    } catch (e) {
        throw e;
    }

})

// Update api route
router.put("/:id", async function (req, res) {
    let error = routerHelpers.getError(req.body.title, req.body.image, req.body.body)
    const newBlog = {
        title: req.body.title,
        image: req.body.image,
        body: sanitizer.sanitize(req.body.body)
    }

    if (!error) {
        try {
            const blog = await updateBlog(req.params.id, newBlog);
            res.status(200).send({ blog: blog });
        } catch (e) {
            res.status(400).send({ error: { header: 'Edit Failed!', message: 'Please try again after sometime.' } });
        }
    } else {
        res.status(400).send({ error: error });
    }
});

// Delete api route
router.delete("/:id", async function (req, res) {
    try {
        const blog = await deleteBlog(req.params.id);
        res.status(200).send(blog);
    } catch (e) {
        res.status(400).send({ error: { header: 'Deletion Failed!', message: 'Please try again after sometime.' } });
    }
});

module.exports = router;