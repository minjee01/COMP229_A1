var mongoose = require('mongoose');

// create a model class
var contactModel = mongoose.Schema({
    name: String,
    number: String,
    email: String,
},
{
    collection: "contact"
});

module.exports = mongoose.model('Contact', contactModel);