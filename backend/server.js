// builtins
const path = require('path');

// get and set environmental variables from .env file in root directory
require('dotenv').config()

// external modules
const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const cors = require('cors');
// const mongoose = require('mongoose');
const session = require('express-session');
// const MongoDBStore = require('connect-mongodb-session')(session);
 
// internal modules
const MONGODB_URI = process.env.MONGODB_URI;
// console.log(MONGODB_URI);

// models

// routes
const routes = require('./routes/routes');
const form_routes = require('./routes/formRoutes');

// controllers

// server initialization
// const csrfProtection = csrf();
const app = express();

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString() + '-' + file.originalname);
    }
});

// server config

// enables cors headers
app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'uploads')));


app.use(bodyParser.urlencoded({ extended: false }));
// configure multer
app.use(multer({
    storage: fileStorage,
    fileFilter: fileFilter
}).single('image')); // the file in the req body must be called images

app.use((req, res, next) => {
    console.log('got a request');
    console.log('form data:', req.body);
    console.log('files:', req.files);
    next();
});

// app.use(csrfProtection);
app.use('/uploads', form_routes);
app.use('/', routes);
// global error handling middleware

// catch all routes for unknown resources
app.use((req, res, next) => {
    // global error handling middleware
    res.status(404).json({
        message: 'resource not found',
        error: error
    });
});

app.use((error, req, res, next) => {

    // global error handling middleware
    res.status(500).json({
        error: error
    });
});


app.listen(4000);