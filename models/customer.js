const mongoose = require('./connections.js');

const customerSchema = new mongoose.Schema({
    name: String,
    age: Number,
    talent: String,
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;