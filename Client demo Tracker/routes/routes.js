const express = require('express');
const router = express.Router();
const UserController = require('../controllers/usercontrollers');
const demoTrackercontroller = require('../controllers/demotrackercontroller');
const demoTrackerCommentsController = require('../controllers/demoCommentsController');
const Calltrackercontroller = require('../controllers/callTrackerController');
const callCommentsController = require('../controllers/callCommentsController')
const userController = UserController;


/**
 * Signin and Signout
 */
router.post('/signin', userController.loginUser );

/**
 * Demo Tracker Page
 */
router.post('/Clientdemotracker',demoTrackercontroller.demodetails);
router.post('/Clientdemotracker/create', demoTrackercontroller.demoCreate);
router.post('/Clientdemotracker/view/:id',demoTrackercontroller.viewonedetail);
router.post('/Clientdemotracker/update',demoTrackercontroller.editonedetail);
router.post('/Clientdemotracker/comments',demoTrackerCommentsController.viewComments);
router.post('/Clientdemotracker/addComments',demoTrackerCommentsController.addNewComments);
router.post('/Clientdemotracker/filter',demoTrackercontroller.filterdata);
router.post('/Clientdemotracker/:id',demoTrackercontroller.deomdelete);


/**
 * Call Tracker Page
 */
router.post('/Clientcalltracker',Calltrackercontroller.callDetails);
router.post('/Clientcalltracker/create',Calltrackercontroller.callCreate);
router.post('/Clientcalltracker/view/:id',Calltrackercontroller.viewOneCall);
router.post('/Clientcalltracker/update',Calltrackercontroller.editoneCall);
router.post('/Clientcalltracker/filter',Calltrackercontroller.filterCall);
router.post('/Clientcalltracker/comments',callCommentsController.viewcomments);
router.post('/Clientcalltracker/addComments',callCommentsController.addcomments);
router.post('/Clientcalltracker/:id',Calltrackercontroller.calldelete);


module.exports = router;



