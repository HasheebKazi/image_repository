/** External Library Imports **/
const router = require('express').Router();
const { body } = require('express-validator');

/** Internal Dependencies **/
const authControllers = require('../controllers/authControllers');
const User = require('../models/userModel');

/** Source Code **/
/** /auth/signup */
router.put('/signup', [
    body('email', 'Invalid Inputs')
    .trim().isEmail().withMessage('Invalid Email')
    .custom((email, { req }) => {
        return User.findOne({ email: email }).then(userDoc => {
            if (userDoc) {
                return Promise.reject('Email already exists.');
            }
        })
    }).normalizeEmail(),
    body('name', 'Invalid Name').trim().not().isEmpty(),
    body('password', 'Invalid Password').trim().isLength({ min: 6 }),
    // body('confirmPassword').trim().custom((value, { req }) => {
    //     if (value !== req.body.password) {
    //         throw new Error('Passwords have to match!');
    //     }
    //     return true;
    // })
],  authControllers.putSignup);

/** /auth/login */
router.post('/login', [
    // body('email', 'Invalid Inputs')
    // .trim().isEmail().withMessage('Invalid Email')
    // .custom((email, { req }) => {
    //     return User.findOne({ email: email }).then(userDoc => {
    //         if (!userDoc) {
    //             return Promise.reject('Email invlad.');
    //         }
    //     })
    // }).normalizeEmail(),
    // body('password', 'Invalid Password').trim().isLength({ min: 6 })
],  authControllers.postLogin);


/** Module Exports **/
module.exports = router;