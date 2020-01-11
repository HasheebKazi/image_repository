// builtins
const path = require('path');

// external 
const express = require('express');

// internal
const initial_controllers = require('../controllers/controllers');

// routes setup
const router = express.Router();

router.get('/', initial_controllers.getInitial);
router.get('/msg', initial_controllers.getMsg);

module.exports = router;