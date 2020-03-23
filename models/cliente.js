const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
    name: String,
    openBalance: Number,
    location: String,
})

module.exports = mongoose.model('Client', ClientSchema);