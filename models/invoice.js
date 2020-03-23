const mongoose = require('mongoose');
const pro = require('./product');
const cli = require('./cliente');


const InvoiceSchema = new mongoose.Schema({
    customerId:{ type: mongoose.Schema.Types.ObjectId, ref: "Client" },
    items: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
    total: Number,
    Date: Date,
})

module.exports = mongoose.model('Invoice', InvoiceSchema);