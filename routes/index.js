var express = require('express');
var router = express.Router();

/* GET Home page. */
router.get('/', function(req, res, next) {
  res.render('index', 
  { title: 'home',});
});

router.get('/home', function(req, res, next) {
  res.render('index', 
  { title: 'home',});
});

/* GET About Me page. */
router.get('/aboutMe', function(req, res, next) {
  res.render('index', 
  { title: 'aboutMe',});
});

/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('index', 
  { title: 'projects',});
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('index', 
  { title: 'services',});
});

/* GET Contact Me page. */
router.get('/contactMe', function(req, res, next) {
  res.render('index', 
  { title: 'contactMe',});
});




module.exports = router;
