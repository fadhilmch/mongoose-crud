const Book = require('../models/books.model');

module.exports = {
    getAllBooks (req, res) {
        Book.find((err, data) =>{
            if(err)
                return res.status(500).json({
                    message: "Could not find books"
                })
            return res.status(200).json({
                message: "Found Books",
                data: data
            });
        });
    },

    addBook(req,res) {
        const {isbn,title,author,category,stock} = req.body;
        Book.create({
            isbn,
            title,
            author,
            category,
            stock
        }).then(book => {
            return res.status(201).json({
                message:'Succeed to add new book',
                data: book
            })
        }).catch(err => {
            return res.status(500).json({
                message: 'Cannot add new book',
                err
            })
        })
    },

    deleteBook(req, res) {
        Book.findByIdAndRemove(req.params.id, (err,result) =>{
            if(err){
                return res.status(500).json({
                    message: 'Cannot delete book',
                    err
                });
            }
            return res.status(201).json({
                message:'Succeed to delete book',
                data: result
            });
        });
    },

    updateBook(req, res) {
        Book.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, result) => {
            if(err){
                return res.status(500).json({
                    message: 'Cannot update book',
                    err
                });
            }
            return res.status(201).json({
                message:'Succeed to update book',
                data: result
            });
        })
    },

    getById(req, res) {
        Book.findById(req.params.id, (err, result) => {
            if(err){
                return res.status(500).json({
                    message: 'Cannot find book',
                    err
                });
            }
            return res.status(201).json({
                message:'Succeed to find book',
                data: result
            });
        })
    }


}
