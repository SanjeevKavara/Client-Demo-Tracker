const express = require('express');
const router = express.Router();
const UserController = require('../controllers/usercontrollers');
const demoTrackercontroller = require('../controllers/Demotrackercontroller');


const userController = UserController;


/**
 * Signin and Signout
 */
router.post('/signin', userController.loginUser );

/**
 * Demo Tracker Page
 */
router.post('/Clientdemotracker',demoTrackercontroller.demodetails);
router.post('/clientdemotracker/create', demoTrackercontroller.demoCreate);
router.post('/Clientdemotracker/:id',demoTrackercontroller.deomdelete);
router.post('/Clientdemotracker/view/:id',demoTrackercontroller.viewonedetail);


module.exports = router;



