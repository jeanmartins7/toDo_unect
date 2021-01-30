const mongoose = require('../database');

const DoneSchema = new mongoose.Schema({
    done: {
        
        type: String,
        require: true,
    },
    createdAt: {
        type: Date,
        default:Date.now,
    }
})

const Done = mongoose.model('Done', DoneSchema);

module.exports = Done;