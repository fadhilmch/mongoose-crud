const Transaction = require('../models/transactions.model');


module.exports = {
    getAllTransactions (req, res) {
        Transaction.find((err, data) =>{
            if(err)
                return res.status(500).json({
                    message: "Could not find transactions"
                })
            return res.status(200).json({
                message: "Found Transactions",
                data: data
            });
        })
        .populate('member')
        .populate('booklist')
    },

    addTransaction(req,res) {
        const {member,days,booklist} = req.body;
        Transaction.create({
            member,
            days,
            booklist
        })
        .then(transaction => {
            return res.status(201).json({
                message:'Succeed to add new transaction',
                data: transaction
            })
        }).catch(err => {
            return res.status(500).json({
                message: 'Cannot add new transaction',
                err
            })
        })
    },

    deleteTransaction(req, res) {
        Transaction.findByIdAndRemove(req.params.id, (err,result) =>{
            if(err){
                return res.status(500).json({
                    message: 'Cannot delete transaction',
                    err
                });
            }
            return res.status(201).json({
                message:'Succeed to delete transaction',
                data: result
            });
        })
        .populate('member')
        .populate('booklist');
    },

    updateTransaction(req, res) {
        Transaction.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, result) => {
            if(err){
                return res.status(500).json({
                    message: 'Cannot update transaction',
                    err
                });
            }
            return res.status(201).json({
                message:'Succeed to update transaction',
                data: result
            });
        })
        // .populate('member')
        // .populate('booklist');

    },

    getById(req, res) {
        Transaction.findById(req.params.id, (err, result) => {
            if(err){
                return res.status(500).json({
                    message: 'Cannot find transaction',
                    err
                });
            }
            return res.status(201).json({
                message:'Succeed to find transaction',
                data: result
            });
        })
        .populate('member')
        .populate('booklist');
    }


}
