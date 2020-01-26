/** External Library Imports **/
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jsonWebToken = require('jsonwebtoken');

/** Internal Dependencies **/
const User = require('../models/userModel')
const { bubbleError, throwThenbubbleError } = require('../util/error_utils');

/** Builtins **/
const path = require('path');

/** Source Code **/
exports.putSignup = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        throwThenbubbleError('validation failed.', 422, errors.array());
    } else {
        const email = req.body.email;
        const password = req.body.password;
        bcrypt.hash(password, 12)
            .then(hashedPassword => {
                const user = new User({
                    email: email,
                    password: hashedPassword,
                    stock_image_posts: []
                });
                return user.save();
            })
            .then(result => {
                res.status(201).json({ message: 'User successfully created!', userId: result._id });
            })
            .catch(error => {
                bubbleError(error, error.statusCode, next);
            });
    }
};

exports.postLogin = (req, res, next) => {
    const errors = validationResult(req); // auto request any validation errors
    if (!errors.isEmpty()) {
        throwThenbubbleError('Authentication Failed.', 422, errors.array());
    } else {
        const email = req.body.email;
        const password = req.body.password;
        let loadedUser = null;
        User.findOne({ email: email })
        .then(user => {
            if (!user) {
                throwThenbubbleError('No user found.', 422);
            } else {
                loadedUser = user;
                bcrypt.compare(password, user.password)
                .then(compareResult => {
                    if (compareResult) {
                        const token = jsonWebToken.sign({ 
                            email: loadedUser.email, 
                            userId: loadedUser._id.toString() 
                        }, process.env.JWTSecretKey, { expiresIn: '1h' });
                        return res.status(200).json({ message: 'Successfully logged in', token: token, userId: loadedUser._id.toString() });
                    } else {
                        throwThenbubbleError('Invalid Password.', 422);
                    }
                }).catch(error => {
                    bubbleError(error, error.statusCode, next);
                });
            }
        })
        .catch(error => {
            bubbleError(error, error.statusCode, next);
        });
    }
};

/** Module Exports **/
// module.exports = {

// };