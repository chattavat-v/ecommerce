var express = require('express');
var router = express.Router();
var Orders = require('../../Models/ordersModel');
const sendEmail = require('../email/sendEmail');
const database = require('../database/database');

//ORDER_CREATE
router.post('/', (req, res, next) =>{
    const doc = new Orders(req.body);
    const _db = new database();

    _db.saveDB(doc)
        .then( result => {
            console.log(result);
        })
        .catch( err => {
            console.log(err.message);
        })

    const { orders, fullName, email } = req.body;
    const { orderedDate, totalPrice, order } = orders;

    const products = orders.orders.map(({product:{productName}, quantity}) => {
        return productName + " x " + quantity;
    } )

    const _email = new sendEmail();
    const option = {
        from: 'chattavat.psu@gmail.com',
        to: email,
        subject: `รายการสั่งซื้อสินค้า GrowElectronics`,
        text: `เวลา: ${orderedDate} \n คุณ: ${fullName} \n มียอดการสั่งซื้อสินค้า ${totalPrice} บาท \n สินค้าที่สั่งซื้อ ${products}`
    }

    _email.initMailOption = option;

    _email.sendEmail()
        .then( result => {
            console.log(result);
            res.json( {message: result} )
        })
        .catch( err => {
            console.log(err.message);
            res.send( {message: err.message} )
        })

})

//ORDERS_FETCH
router.get('/', (req, res, next) => {
    const _db = new database();
    const { Orders } = require('../database/initCollection.js').initCollection;

    _db.findDB(Orders)
        .then( result => {
            // console.log(result);
            res.json( result )
        })
        .catch( err => {
            // console.log(err.message);
            res.send( {message: err.message} )
        })
})


//ORDER_DELETE
router.delete('/:_id', (req, res, next) => {
    const _db = new database();
    const { Orders } = require('../database/initCollection.js').initCollection;
    const doc_id = req.params._id;

    _db.findByIdAndRemove(Orders, doc_id)
        .then( result => {
            // console.log(result);
            res.json( result )
        })
        .catch( err => {
            // console.log(err.message);
            res.send( {message: err.message} )
        })
})

module.exports = router;
