exports.setCorsHeaders = (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // any domain can access our resources
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE'); // set HTTP verbs that can make CORS requests
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Request header can set Content-Type and Authorization headers
    next(); // continue to response loop
};