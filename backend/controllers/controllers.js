exports.getInitial = (req, res, next) => {
    res.send('<p>Hello World</p>');
};

exports.getMsg = (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json({
        msg: 'frontend and backend connected'
    });
};