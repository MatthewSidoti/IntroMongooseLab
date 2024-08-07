const mongoose = require('./connections.js');

const customerSchema = new mongoose.Schema({
    name: String,
    order: Number,
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;