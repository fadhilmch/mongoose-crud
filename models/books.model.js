const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    isbn: String,
    title: String,
    author: String,
    category: String,
    stock: Number,
    time: {
        type: Date, default: Date.now
    }
});

module.exports = mongoose.model('Book', bookSchema);
