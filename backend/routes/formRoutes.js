// builtins

// external 
const express = require('express');
const { body } = require('express-validator');

// internal
const form_controllers = require('../controllers/form_controllers');

/** External Library Imports **/
const router = require('express').Router();
const { check, body } = require('express-validator');

/** Internal Dependencies **/
const formController = require('../controllers/formControllers');

/** Source Code **/
const FILE_NAME = 'name';
const TAGS = 'tags';

router.post('/', [
    body(FILE_NAME, 'DEFAULT ERROR MESSAGE').trim().isAlphanumeric()
], form_controllers.postUploads);

/** Module Exports **/
module.exports = router;