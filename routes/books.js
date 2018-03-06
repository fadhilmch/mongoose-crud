const express = require('express');
const router = express.Router();
const {getAllBooks, addBook, deleteBook, updateBook, getById} = require('../controllers/books.controller');

router.get('/', getAllBooks);
router.post('/', addBook);

router.get('/:id', getById);
router.delete('/:id', deleteBook);
router.put('/:id', updateBook);

module.exports = router;
