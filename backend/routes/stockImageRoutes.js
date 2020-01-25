/** External Library Imports **/
const router = require('express').Router();
const { body } = require('express-validator');

/** Internal Dependencies **/
const stockImageControllers = require('../controllers/stockImageControllers');

/** Source Code **/
/** /stockImage/..... */
router.get('/post/:postId', stockImageControllers.getStockImage);

/** Module Exports **/
module.exports = router;