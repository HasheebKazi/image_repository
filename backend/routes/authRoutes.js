/** External Library Imports **/
const router = require('express').Router();
const { body } = require('express-validator');

/** Internal Dependencies **/
const authControllers = require('../controllers/authControllers');

/** Source Code **/
/** /stockImage/..... */
router.get('/auth/login', authControllers.postLogin);

/** Module Exports **/
module.exports = router;