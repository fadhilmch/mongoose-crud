const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
    member : {
        type: Schema.Types.ObjectId,
        ref: 'Customer'
    },
    days: Number,
    out_date: { type: Date, default: new Date() },
    due_date: Date,
    in_date: Date,
    fine: Number,
    booklist: [{
        type: Schema.Types.ObjectId,
        ref: 'Book'
    }],
    time: {
        type: Date, default: Date.now
    }
}).pre('save', function(){
    this.due_date = new Date(Date.now()+(this.days)* 86400000);
    this.in_date = null;
    this.fine = 0;
}).pre('findOneAndUpdate', function(){
    // console.log("Update");
    // // this.update({},{ $set: { fine: 5000 } });
    // console.log(this.schema.obj.due_date);
    // this._update.fine = 7000;
    // this._update.in_date  = new Date(this._update.in_date);
    // console.log("Date "+this._update.due_date);
    // console.log(new Date (this._update.in_date - this._update.due_date));
    // // this._update.$set.in_date = new Date(this._update.$set.in_date);
    // // this._update.$set.fine = 4000;
    // // console.log(this._update.$set.in_date);
    // // console.log(this._update.$set.in_date - this._update.$set.due_date);
    // // // this.fine = this.booklist.length*(this.in_date-)
});

module.exports = mongoose.model('Transaction', transactionSchema);
