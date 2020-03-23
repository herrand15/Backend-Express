const mongoose = require('mongoose');
const prpdu = require('./product');
const cli = require('./cliente');

const SalesReceiptSchema = new mongoose.Schema({
    customerId: { type: mongoose.Schema.Types.ObjectId, ref: "Client" },
    items: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
    total: Number,
    Date: Date,
})

module.exports = mongoose.model('SalesReceipt', SalesReceiptSchema);
