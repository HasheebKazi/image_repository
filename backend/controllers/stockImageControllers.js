/** External Library Imports **/
const { validationResult } = require('express-validator');

/** Internal Dependencies **/
const StockImage = require('../models/stockImageModel');
const User = require('../models/userModel');

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
            if (false) { // need a proper condition for this
                throwThenbubbleError('Not authroized', 403);
            } else {
                res.status(200).json({ message: 'Stock image found successfully', StockImage: result });
            }
        }
    })
    .catch(error => {
        bubbleError(error, error.statusCode, next);
    });
};

exports.getStockImages = (req, res, next) => {
    const currentPage = req.query.page || 1;
    const perPage = 2;
    let totalItems;
    StockImage.find().countDocuments()
    .then(count => {
        totalItems = count;
        return StockImage.find().skip((currentPage -1)*perPage).limit(perPage);
    })
    .then(StockImagesArr => {
        if (!StockImagesArr) {
            throwThenbubbleError('No stock images');
        } else {
            if (false) { // need a proper condition for this
                throwThenbubbleError('Not authroized', 403);
            } else {
                const message = 'StockImages successfully found';
                res.status(200).json({ message: message, StockImages: StockImagesArr, totalItems: totalItems });
            }
        }
    })
    .catch(error => {
        bubbleError(error, error.statusCode, next);
    });
};

exports.putStockImage = (req, res, next) => { // update post
    const stockImageId = req.params.stockImageId;
    const updatedTitle = req.body.title;
    const updatedDescription = req.body.description;
    let updatedImageUrl = req.body.image;

    if (req.file) {
        updatedImageUrl = req.file.path;
    }

    if (!updatedImageUrl) { // image url should be set at this point so if there is none we have problems
        throwThenbubbleError('No stock image found', 422);
    }

    const errors = validationResult(req); // auto request any validation errors
    if (!errors.isEmpty()) {
        throwThenbubbleError('Invalid Inputs.', 422, errors.array());
    } else {
        StockImage.findById(stockImageId)
        .then(SingleStockImage => {
            if (!SingleStockImage) {
                throwThenbubbleError('No stock image.');
            } else {

                if (SingleStockImage.creator.toString() !== req.userId.toString()) {
                    throwThenbubbleError('Not authroized', 403);
                } else {
                    if (SingleStockImage.imageUrl !== updatedImageUrl) {
                        deleteFile(path.join(__dirname, '..', post.imageUrl));
                    }
                    SingleStockImage.title = updatedTitle;
                    SingleStockImage.description = updatedDescription;
                    SingleStockImage.imageUrl = updatedImageUrl;

                    return SingleStockImage.save();
                }

            }
        }).then(result => {        
            res.status(200).json({ message: 'stock image successfully updated', StockImage: result });
        })
        .catch(error => {
            bubbleError(error, error.statusCode, next);
        })
    }
};

// exports.postCreateStockImage = (req, res, next) => {
//     let creator = null;
//     // validate inputs
//     const errors = validationResult(req); // auto request any validation errors
//     if (!errors.isEmpty()) {
//         throwThenbubbleError('Invalid Input.', 422, errors.array());
//     } else if (!req.file) {
//         throwThenbubbleError('File not found.', 422, errors.array());
//     } else { // if inputs are valid
//         const title = req.body.title;
//         const description = req.body.description;
//         const imageUrl = req.file.path;

//         const stockImage = new StockImage({
//             title: title,
//             description: description,
//             imageUrl: imageUrl,
//             creator: req.userId
//         });
//         stockImage.save()
//         .then(result => {
//             return User.findById(req.userId) 
//         }).then(user => {
//             creator = user;
//             user.stock_image_posts.push(stockImage);
//             user.save();
//         })
//         .then(result => {
//             res.status(200).json({ message: 'Stock Image created successfully', StockImage: stockImage, creator: { _id: creator._id } });
//         })
//         .catch(error => {
//             bubbleError(error, error.statusCode, next);
//         });
    
//     }
// };

exports.deleteStockImage = (req, res, next) => {
    const stockImageId = req.params.stockImageId;
    Post.findById(stockImageId)
    .then(SingleStockImage => {
        // check if logged in user then, check if the post exits
        if (!SingleStockImage) {
            throwThenbubbleError('No post.');
        } else {

            if (SingleStockImage.creator.toString() !== req.userId.toString()) {
                throwThenbubbleError('Not authroized', 403);
            } else {
                deleteFile(path.join(__dirname, '..', SingleStockImage.imageUrl));
                return Post.findByIdAndRemove(stockImageId);
            }
        }
    }).then(result => {        
        // post has been successfully deleted remove the relation from the users
        return User.findById(req.userId);
    })
    .then(user => {
        console.log(user);
        user.stock_image_posts.pull(stockImageId); //
        user.save();
    })
    .then(result => {
        res.status(200).json({ message: 'stock image successfully deleted', post: result });
    })
    .catch(error => {
        bubbleError(error, error.statusCode, next);
    });
};



// temp

exports.postCreateStockImage = (req, res, next) => {
    // let creator = null;
    // // validate inputs
    // const errors = validationResult(req); // auto request any validation errors
    // if (!errors.isEmpty()) {
    //     throwThenbubbleError('Invalid Input.', 422, errors.array());
    // } else 


    
    // if (!req.file) {
    //     throwThenbubbleError('File not found.', 422, errors.array());
    // } else { // if inputs are valid
        const email = req.body.email;
        const imageUrl = req.file.path;

        const stockImage = new StockImage({
            title: email,
            description: 'lorem ipsum',
            imageUrl: imageUrl
        });
        stockImage.save()
        .then(result => {
            // return User.findById(req.userId) 
            return
        }).then(user => {
            // creator = user;
            // user.stock_image_posts.push(stockImage);
            // user.save();
            return
        })
        .then(result => {
            res.status(200).json({ message: 'Stock Image created successfully', StockImage: stockImage, creator: { _id: '' } });
        })
        .catch(error => {
            bubbleError(error, error.statusCode, next);
        });
    
    // }
};