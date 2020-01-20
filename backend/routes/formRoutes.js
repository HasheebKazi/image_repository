// builtins

// external 
const express = require('express');
const { body } = require('express-validator');

// internal
const form_controllers = require('../controllers/form_controllers');


// constants
const FILE_NAME = 'name';
const TAGS = 'tags';

// routes setup
const router = express.Router();

router.post('/', [
    body(FILE_NAME, 'DEFAULT ERROR MESSAGE').trim().isAlphanumeric()
], form_controllers.postUploads);

module.exports = router;