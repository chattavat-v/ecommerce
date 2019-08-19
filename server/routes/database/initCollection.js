var Orders = require('../../Models/ordersModel');
var Product = require('../../Models/productsModel');

const initCollection = {
    Orders: Orders,
    Product: Product
}

module.exports = { initCollection };