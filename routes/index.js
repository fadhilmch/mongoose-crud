const express = require('express');
const router = express.Router();
const homeRouter = require('./home.js');
const booksRouter = require('./books');
const transactionsRouter = require('./transactions');
const customersRouter = require('./customers');


router.use('/', homeRouter);
router.use('/books', booksRouter);
router.use('/transactions', transactionsRouter);
router.use('/customers', customersRouter);

module.exports = router;
