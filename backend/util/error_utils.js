exports.bubbleError = (error, statusCode, next) => {
    if (!error.statusCode) {
        error.statusCode = statusCode || 500;
    }
    next(error);
};

exports.throwThenbubbleError = (message, statusCode) => {
    // if you throw an error inside a then block the next catch block is reached, however that catch block must next the error to reach the global error handling middleware
    let errorMsg = message || 'Error Occured';
    const error = new Error(errorMsg);
    error.statusCode = statusCode || 500;
    throw error;
}