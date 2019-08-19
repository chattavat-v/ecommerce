var express = require('express');
var router = express.Router();
var Product = require('../../Models/productsModel');
const database = require('../database/database');

//PRODUCT_FETCH
router.get('/:_id', (req, res, next) => {
    const _db = new database();
    const { Product } = require('../database/initCollection.js').initCollection;
    const doc_id = req.params._id;

    _db.findById(Product, doc_id)
        .then( result => {
            // console.log(result);
            res.json( result )
        })
        .catch( err => {
            // console.log(err.message);
            res.send( {message: err.message} )
        })
})

//PRODUCTS_FETCH
router.get('/', (req, res, next) => {

    const _db = new database();
    const { Product } = require('../database/initCollection.js').initCollection;

    _db.findDB(Product)
        .then( result => {
            // console.log(result);
            res.json( result )
        })
        .catch( err => {
            // console.log(err.message);
            res.send( {message: err.message} )
        })
})

//PRODUCT_CREATE
router.post('/', (req, res, next) => {
    const doc = new Product(req.body);
    const _db = new database();

    _db.saveDB(doc)
        .then( result => {
            console.log(result);
            res.status(200).send(result)
        })
        .catch( err => {
            console.log(err.message);
            res.send( {message: err.message} )
        })
})

//PRODUCT_DELETE
router.delete('/:_id', (req, res, next) => {
    const _db = new database();
    const { Product } = require('../database/initCollection.js').initCollection;
    const doc_id = req.params._id;

    _db.findByIdAndRemove(Product, doc_id)
        .then( result => {
            // console.log(result);
            res.json( result )
        })
        .catch( err => {
            // console.log(err.message);
            res.send( {message: err.message} )
        })
})

//PRODUCT_UPDATE
router.put('/:_id', (req, res, next) => {
    const _db = new database();
    const { Product } = require('../database/initCollection.js').initCollection;
    const doc_id = req.params._id;
    const doc = new Product(req.body);

    _db.findByIdAndUpdate(Product, doc_id, doc)
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
