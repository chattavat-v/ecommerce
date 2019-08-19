var express = require('express');
var router = express.Router();
var Contact = require('../../Models/contactModel');
const sendEmail = require('../email/sendEmail');
const database = require('../database/database');

// CONTACT_CREATE
router.post('/', (req, res, next) => {

    const doc = new Contact(req.body);
    const _db = new database();
    _db.saveDB(doc)
        .then( result => {
            console.log(result);
        })
        .catch( err => {
            console.log(err.message);
        })

    const { fullName, email, title, message, msgDate } = req.body;
    const _email = new sendEmail();
    const option = {
      from: email,
      to: 'chattavat.psu@gmail.com',
      subject: title,
      text: `เวลา: ${msgDate} \n จากคุณ: ${fullName} \n Email: ${email}  \n ติดต่อเรื่อง: ${title} \n โดยมีรายละเอียดดังนี้: ${message}`
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

module.exports = router;
