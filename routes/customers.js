const express = require('express');
const router = express.Router();
const {getAllCustomers, addCustomer, deleteCustomer, updateCustomer, getById} = require('../controllers/customers.controller');

router.get('/', getAllCustomers);
router.post('/', addCustomer);

router.get('/:id', getById);
router.delete('/:id', deleteCustomer);
router.put('/:id', updateCustomer);

module.exports = router;
