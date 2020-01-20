exports.postUploads = (req, res, next) => {
    res.status(200).json({
        msg: 'An image has been uploaded'
    });
};