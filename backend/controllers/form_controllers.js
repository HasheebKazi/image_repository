exports.postUploads = (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json({
        msg: 'frontend and backend connected'
    });
};