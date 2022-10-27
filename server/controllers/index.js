var express = require('express');
var router = express.Router();

module.exports.displayHomePage = (req, res, next) =>{
    res.render('index', {title: 'home'});
}

module.exports.displayAboutMePage = (req, res, next) =>{
    res.render('index', {title: 'aboutMe'});
}

module.exports.displayProjectsPage = (req, res, next) =>{
    res.render('index', {title: 'projects'});
}

module.exports.displayServicesPage = (req, res, next) =>{
    res.render('index', {title: 'services'});
}

module.exports.displayContactMePage = (req, res, next) =>{
    res.render('index', {title: 'contactMe'});
}