var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');

// connect to our Contact Model
var Contact = require('../models/contact');

/* GET Route for the Book List page - READ Operation */
router.get('/', (req, res, next) =>{
    Contact.find((err, contactList) =>{
        if(err){
            return console.error(err);
        }else{
            //console.log(ContactList);

            res.render('contact/list', {title: 'Contact List', ContactList: contactList});
        }
    });
});


/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', (req, res, next) =>{
    res.render('contact/add', {title: 'Add Contact'})
});
/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', (req, res, next) =>{
    var newContact = Contact({
        "name": req.body.name,
        "number": req.body.number,
        "email": req.body.email
    });

    Contact.create(newContact, (err, Contact) =>{
        if(err){
            console.log(err);
            res.end(err);
        }else{
            // refresh the contact list
            res.redirect('/contact-list');
        }
    });
});

/* GET Route for displaying the Edit page - UPDATE Operation */
router.get('/edit/:id', (req, res, next) =>{
    var id = req.params.id;

    Contact.findById(id, (err, contactToEdit) =>{
        if(err){
            console.log(err);
            res.end(err);
        }else{
            // show the eidt view
            res.render('contact/edit', {title: "Edit Contact", contact: contactToEdit})
        }
    });
});

/* POST Route for processing the Edit page - UPDATE Operation */
router.post('/edit/:id', (req, res, next) =>{
    var id = req.params.id
    var updatedContact = Contact({
        "_id": id,
        "name": req.body.name,
        "number": req.body.number,
        "email": req.body.email
    });

    Contact.updateOne({_id: id}, updatedContact, (err)=>{
        if(err){
            console.log(err);
            res.end(err);
        }else{
            // refresh the contact list
            res.redirect('/contact-list');
        }
    });
});

/* GET to perform Deletion - DELETE Operation */
router.get('/delete/:id', (req, res,next) =>{
    var id = req.params.id;

    Contact.remove({_id: id}, (err) =>{
        if(err){
            console.log(err);
            res.end(err);
        }else{
            //refresh the contact list
            res.redirect('/contact-list');
        }
    });
});

module.exports = router;