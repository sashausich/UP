const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    photoLink: {
        type: String,
        required: true,
    },
    likes: {
        type: [{
            type: Number,
        }],
    },
    tags: {
        type: [{
            type: String,
        }],
    },
});

module.exports = mongoose.model('Posts', PostSchema);
