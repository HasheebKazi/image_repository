/** External Library Imports **/
const router = require('express').Router();
const { body } = require('express-validator');

/** Internal Dependencies **/
const stockImageControllers = require('../controllers/stockImageControllers');
const isAuth = require('../middleware/auth_middleware');

/** Source Code **/
/** /repo/stockimage */
router.get('/stockimage/:stockImageId', isAuth, stockImageControllers.getStockImage);
router.post('/stockimage', [
    body('title', 'Invalid Title').trim().isLength({ min: 5 }),
    body('description', 'Invalid description').trim().isLength({ min: 10 })
],
// isAuth, 
stockImageControllers.postCreateStockImage);

// put and patch have requset bodies
// put is used to replace content 
router.put('/stockimage/:stockImageId', 
// isAuth, 
stockImageControllers.putStockImage); 

// delete is used to delete resources on the server
// delete requests have no body but can carry information through query params
router.delete('/stockimage/:stockImageId',  
// isAuth, 
stockImageControllers.deleteStockImage);

/** /repo/stockImages */
router.get('/stockimages', [
    body('title', 'Invalid Title').trim().isLength({ min: 5 }),
    body('description', 'Invalid description').trim().isLength({ min: 10 })
], 
// isAuth, 
stockImageControllers.getStockImages);

/** Module Exports **/
module.exports = router;