/** External Library Imports **/
const { validationResult } = require('express-validator');

/** Internal Dependencies **/
const User= require('../models/userModel');


/** Builtins **/
const path = require('path');

/** Source Code **/
exports.postLogin = (req, res, next) => {
    next(new Error('Route under construction'));
}