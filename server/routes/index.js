var express = require('express');
var router = express.Router();

var indexController = require('../controllers/index');

/* GET Home page. */
router.get('/', indexController.displayHomePage);

router.get('/home', indexController.displayHomePage);

/* GET About Me page. */
router.get('/aboutMe', indexController.displayAboutMePage);

/* GET Projects page. */
router.get('/projects', indexController.displayProjectsPage);

/* GET Services page. */
router.get('/services', indexController.displayServicesPage);

/* GET Contact Me page. */
router.get('/contactMe', indexController.displayContactMePage);


module.exports = router;
