const Customer = require('../models/customers.model');


module.exports = {
    getAllCustomers (req, res) {
        Customer.find((err, data) =>{
            if(err)
                return res.status(500).json({
                    message: "Could not find customers"
                })
            return res.status(200).json({
                message: "Found Customers",
                data: data
            });
        });
    },

    addCustomer(req,res) {
        const {name,memberid,address,zipcode,phone} = req.body;
        Customer.create({
            name,
            memberid,
            address,
            zipcode,
            phone
        }).then(customer => {
            return res.status(201).json({
                message:'Succeed to add new customer',
                data: customer
            })
        }).catch(err => {
            return res.status(500).json({
                message: 'Cannot add new customer',
                err
            })
        })
    },

    deleteCustomer(req, res) {
        Customer.findByIdAndRemove(req.params.id, (err,result) =>{
            if(err){
                return res.status(500).json({
                    message: 'Cannot delete customer',
                    err
                });
            }
            return res.status(201).json({
                message:'Succeed to delete customer',
                data: result
            });
        });
    },

    updateCustomer(req, res) {
        Customer.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, result) => {
            if(err){
                return res.status(500).json({
                    message: 'Cannot update customer',
                    err
                });
            }
            return res.status(201).json({
                message:'Succeed to update customer',
                data: result
            });
        })
    },

    getById(req, res) {
        Customer.findById(req.params.id, (err, result) => {
            if(err){
                return res.status(500).json({
                    message: 'Cannot find customer',
                    err
                });
            }
            return res.status(201).json({
                message:'Succeed to find customer',
                data: result
            });
        })
    }


}
