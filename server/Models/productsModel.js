var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
    productType: {type: String, required: true},
    productName: {type: String, required: true},
    Image: {type: String, required: true},
    productWebsite: {type: String, require: true},
    unitPrice: {type: String, required: true},
    productDetail: {type: String, required: true}
});

var Product = mongoose.model("Product", productSchema);
module.exports = Product;