const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const registerPartner = require('../Apis/Partner.registration');
// import { registerPartner } from '../Apis/Partner.registration';


// user routes

router.post('/user-register',userController.register);
router.post('/login',userController.login);
router.get('/logout',userController.logout);

// partner routes
router.post('/partner-register',registerPartner.registerPartner);

module.exports = router;