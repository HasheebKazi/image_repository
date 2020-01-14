// builtins
const path = require('path');

// external 
const express = require('express');

// internal
const form_controllers = require('../controllers/form_controllers');

// routes setup
const router = express.Router();

router.post(form_controllers.postUploads);

module.exports = router;