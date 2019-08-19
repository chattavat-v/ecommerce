var mongoose = require('mongoose');

var contactSchema = mongoose.Schema({
    fullName: {type: String, required: true},
    email: {type: String, required: true},
    title: {type: String, required: true},
    message: {type: String, require: true},
    msgDate: {type: String, required: true}
});

var Contact = mongoose.model("Contact", contactSchema);
module.exports = Contact;