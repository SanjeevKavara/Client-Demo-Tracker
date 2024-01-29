const express = require('express');
const router = express.Router();
const UserController = require('../controllers/usercontrollers')


const userController = UserController;


/**
 * Signin and Signout
 */
router.post('/signin', userController.loginUser );

module.exports = router;

