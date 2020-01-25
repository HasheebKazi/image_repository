/** External Library Imports **/
const { validationResult } = require('express-validator');

/** Internal Dependencies **/
const StockImage = require('../models/stockImageModel');
const { bubbleError, throwThenbubbleError } = require('../util/error_utils');
const { deleteFile } = require('../util/file_utils');

/** Builtins **/
const path = require('path');

/** Source Code **/
exports.getStockImage = (req, res, next) => {
    const stockImageId = req.params.stockImageId;
    StockImage.findById(stockImageId)
    .then(result => {
        if(!result) {
            throwThenbubbleError('No stock image found', 500);
        } else {
            // we have a valid post
            res.status(200).json({
                message: 'Stock image found successfully',
                StockImage: result
            });
        }
    })
    .catch(error => {
        bubbleError(error, 500, next);
    });
};