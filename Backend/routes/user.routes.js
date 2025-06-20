const express = require('express');
const router = express.Router();
const { body } = require("express-validator")
const usercontroller = require('../controllers/user.controller');

router.post('/register' , [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min: 3}).withMessage
    ('First name must be at least 3 characters long'),
    body('password').isLength({ min: 6}).withMessage('Password must be  at least 6 characters long')
])

usercontroller.registerUser







module.exports = router;