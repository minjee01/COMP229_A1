var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

//Connect to our Contact model
var Contact = require('../models/contact');

var contactController = require('../controllers/contact');


/* GET Route for the Contact List Page - READ Operation */
router.get('/', contactController.displayContactList);

/* GET Route for displaying Add Page - CREATE Operation */
router.get('/add', (req, res, next) => {
    res.render('contact/add', {title: 'Add Contact'});
});

/* POST Route for processing Add Page - CREATE Operation */
router.post('/add', (req, res, next) => {
    var newContact = Contact({
        "name": req.body.name,
        "number": req.body.number,
        "email": req.body.email
    });

    Contact.create(newContact, (err, Contact) =>{
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            //refresh the contact list
            res.redirect('/contact-list');
        }
    });
});

/* GET Route for displaying Edit Page - UPDATE Operation */
router.get('/edit/:id', (req, res, next) => {
    var id = req.params.id;

    Contact.findById(id, (err, contactToEdit) =>{
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            //show the edit view
            res.render('contact/edit', {title: 'Edit Contact', contact: contactToEdit});
        }
    });
});

/* POST Route for processing Edit Page - UPDATE Operation */
router.post('/edit/:id', (req, res, next) => {
    var id = req.params.id;

    var updatedContact = Contact({
        "_id": id,
        "name": req.body.name,
        "number": req.body.number,
        "email": req.body.email
    });

    Contact.updateOne({_id:id}, updatedContact, (err) =>{
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            //refresh the contact list
            res.redirect('/contact-list');
        }
    });
});

/* GET to perform Deletion - DELETE Operation */
router.get('/delete/:id', (req, res, next) => {
    var id = req.params.id;

    Contact.remove({_id: id}, (err) =>{
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            res.redirect('/contact-list');
        }
    });
});

module.exports = router;