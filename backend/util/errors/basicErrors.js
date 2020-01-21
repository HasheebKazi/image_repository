exports.basicErrors = (error, next) => {
    const error = new Error(error);
    error.httpStatusCode = 500;
    return next(error);
}