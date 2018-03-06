const express = require('express');
const router = express.Router();
const {getAllTransactions, addTransaction, deleteTransaction, updateTransaction, getById} = require('../controllers/transactions.controller');

router.get('/', getAllTransactions);
router.post('/', addTransaction);

router.get('/:id', getById);
router.delete('/:id', deleteTransaction);
router.put('/:id', updateTransaction);

module.exports = router;
