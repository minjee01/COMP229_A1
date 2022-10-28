// require modules for the user Model
const { trim } = require('jquery');
var mongoose = require('mongoose');
var passportlocalMongoose = require('passport-local-mongoose');
const { collection } = require('./contact');

var User = mongoose .Schema
(
    {
        username:
        {
            type: String,
            default: '',
            trim: true,
            required: "username is required"
        },
        // password:
        // {
        //     type: String,
        //     default: '',
        //     trim: true,
        //     required: "passport is required"
        // }
        email:
        {
            type: String,
            default: '',
            trim: true,
            required: "email address is required"
        },
        displayName:
        {
            type: String,
            default: '',
            trim: true,
            required: "Display Name is required"
        },
        created:
        {
            type: Date,
            default: Date.now
        },
        update:
        {
            type: Date,
            default: Date.now
        },
    },
    {
        collection: "users"
    }
);

// configure options for User Model

var options = ({ missingPasswordError: "Wrong / Missing Password"});
User.plugin(passportlocalMongoose, options);
module.exports.User = mongoose.model('User', User);
