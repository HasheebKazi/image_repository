/** External Library Imports **/
const { validationResult } = require('express-validator');

/** Internal Dependencies **/
const { bubbleError, throwThenbubbleError } = require('../utils/errors');

/** Source Code **/
exports.postUploads = (req, res, next) => {
    res.status(200).json({
        msg: 'An image has been uploaded'
    });
};

/** Module Exports **/
// module.exports = {

// };