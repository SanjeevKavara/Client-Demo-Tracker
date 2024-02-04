const express = require('express');
const router = express.Router();
const UserController = require('../controllers/usercontrollers');
const demoTrackercontroller = require('../controllers/Demotrackercontroller');


const userController = UserController;


/**
 * Signin and Signout
 */
router.post('/signin', userController.loginUser );
router.post('/Clientdemotracker',demoTrackercontroller.demodetails)
router.post('/Clientdemotracker/:id',demoTrackercontroller.deomdelete)

module.exports = router;


