const express = require('express');
const router = express.Router();
const UserController = require('../controllers/usercontrollers');
const demoTrackercontroller = require('../controllers/demotrackercontroller');
const demoTrackerCommentsController = require('../controllers/demoCommentsController')

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
router.post('/Clientdemotracker/view/:id',demoTrackercontroller.viewonedetail);
router.post('/Clientdemotracker/update',demoTrackercontroller.editonedetail);
router.post('/Clientdemotracker/comments',demoTrackerCommentsController.viewComments);
router.post('/Clientdemotracker/addComments',demoTrackerCommentsController.addNewComments);
router.post('/Clientdemotracker/filter',demoTrackercontroller.filterdata);
router.post('/Clientdemotracker/:id',demoTrackercontroller.deomdelete);

module.exports = router;



