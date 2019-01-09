const Blog = require('../models/blogs.js');

// Create Blog
async function createBlog(newBlog) {
    try {
        return await Blog.create(newBlog);
    } catch (e) {
        throw e;
    }
}

// Read Blogs
async function readBlogs() {
    try {
        return await Blog.find({});
    } catch (e) {
        throw e;
    }
}

// Read Blog by Id
async function readBlogById(blogId) {
    try {
        return await Blog.findById(blogId);
    } catch (e) {
        throw e;
    }
}

// Update Blog
async function updateBlog(blogId, updatedBlog) {
    try {
        return await Blog.findByIdAndUpdate(blogId, updatedBlog);
    } catch (e) {
        throw e;
    }
}

// Delete Blog
async function deleteBlog(blogId) {
    try {
        return await Blog.findByIdAndRemove(blogId);
    } catch (e) {
        throw e;
    }
}

module.exports = {createBlog, readBlogs, readBlogById, updateBlog, deleteBlog};