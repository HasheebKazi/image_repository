// builtins
const path = require('path');

// external modules
const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
// const csrf = require('csurf');

// internal modules

// models

// routes
const routes = require('./routes/routes');
const form_routes = require('./routes/formRoutes');

// controllers

// server initialization
// const csrfProtection = csrf();
const app = express();
const multipartFormDataMW = multer({ dest: './public/images/user_uploads' });

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images');
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString() + '-' + file.originalname);
    }
});

// server config
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));

// configure multer
app.use(multer({
    storage: fileStorage,
    fileFilter: fileFilter
}).single('image'));

// app.use(csrfProtection);
app.use('/uploads', form_routes);
app.use('/', routes);
app.use((error, req, res, next) => {
    // res.status(error.httpStatusCode).render(...);
    // res.redirect('/500');

    

    res.status(404).json({
        error: 'something went wrong'
    });
});

// app.use(errorController.get404);

app.listen(4000);