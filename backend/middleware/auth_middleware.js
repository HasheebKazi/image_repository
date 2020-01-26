const jsonWebToken = require('jsonwebtoken');
const { throwThenbubbleError } = require('../util/error_utils');

module.exports = (req, res, next) => {
    const authHeader = req.get('Authorization');
    if (!authHeader) {
        throwThenbubbleError('Not Authenticated.', 401);
    } else {
        const token = req.get('Authorization').split(' ')[1];
        let decodedToken = null;
        try {
            decodedToken = jsonWebToken.verify(token, 'secret');
        } catch (err) {
            throwThenbubbleError('Internal Error.', 500);
        }
        if (!decodedToken) {
            throwThenbubbleError('Not Authenticated.', 401);
        }
        req.userId = decodedToken.userId;
    }
    next();
};