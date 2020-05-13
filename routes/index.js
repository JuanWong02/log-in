var express = require('express');
const passport = require('passport');
var router = express.Router();
const controller = require('./../controllers/index');

const { User } = require('./../models/user');

/* GET home page. */
router.get('/', controller.index);

//Home
router.get('/home', controller.checkLogin, controller.home);

//GET login
router.get('/login', controller.login);


//POST login
router.post('/login', controller.loginPost);

router.get('/register', controller.register);

router.post('/register', controller.registerPost);

router.get('/logout', controller.logout);

router.get('/profile', controller.checkLogin, controller.profile);

router.post('/profile/update', controller.checkLogin,controller.uploadProfilePicture, controller.profileUpdate);

router.get('/image/:id', controller.image);


module.exports = router;
