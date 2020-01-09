// builtins
const path = require('path');

// external modules
const express = require('express');
const bodyParser = require('body-parser');
// const csrf = require('csurf');

// internal modules

// models

// routes
const routes = require('./routes/routes');

// controllers

// server initialization
// const csrfProtection = csrf();
const app = express();

// server config
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


// app.use(csrfProtection);

app.use('/', routes);

// app.use(errorController.get404);

app.listen(4000);