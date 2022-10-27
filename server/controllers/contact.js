var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

//create a reference to the model
var Contact = require('../models/contact');

module.exports.displayContactList = (req, res, next) => {
    Contact.find((err, contactList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            //console.log(contactList);

            res.render('contact/list', {title: 'Contact List', ContactList: contactList, });
        }
    });

    Contact.create(newContact, (err, Contact) =>{
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            res.redirect('/contact-list');
        }
    });
}