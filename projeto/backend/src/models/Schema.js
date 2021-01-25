const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    id: Number,
    todo: String,
},
    {
    timestamps: true,
});

module.exports = mongoose.model('Post', PostSchema); 