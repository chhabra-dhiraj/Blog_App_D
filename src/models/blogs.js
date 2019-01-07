const mongoose = require('mongoose'),
    moment = require('moment');

// Data scheme defining
const blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    dateCreated: {
        type: String, default: function () {
            return new moment().format('DD-MM-YYYY HH:mm');
        }
    }
});

module.exports = mongoose.model('Blog', blogSchema);