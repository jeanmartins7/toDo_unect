const mongoose = require('../database');

const TodoSchema = new mongoose.Schema({
    todo: {
        type: String,
        require: true,
    },
    createdAt: {
        type: Date,
        default:Date.now,
    }
})

const Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;