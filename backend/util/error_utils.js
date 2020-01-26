exports.bubbleError = (error, statusCode, next) => {
    if (!error.statusCode) {
        error.statusCode = statusCode || 500;
    }
    next(error);
};

exports.throwThenbubbleError = (message, statusCode, errorData = []) => {
    let errorMsg = message || 'Error Occured';
    const error = new Error(errorMsg);
    error.data = errorData;
    error.statusCode = statusCode || 500;
    throw error;
}