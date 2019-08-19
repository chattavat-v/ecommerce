var mongoose = require('mongoose');

var orderSchema = mongoose.Schema({
    orders: {
    },
    fullName: {type: String, required: true},
    email: {type: String, required: true}
});

var Order = mongoose.model("Order", orderSchema);
module.exports = Order;