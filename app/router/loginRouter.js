const express = require( 'express' );
const router = express.Router();
const { loginController } = require( "../controllers/index" );







// /api/media/ -> voir page accueil LOGIN...-> GET...OK
router.post( '/', loginController.check);




//const validationModule = require('../validation/validationModule');
//const {  schemaLogin } = require("../validation/schema");
// /api/login/ -> POST
/*router.get( "/:id", loginController.getLogin );
router.patch( "/:id", loginController.modifyLogin );
router.delete( "/:id", loginController.deleteLogin );*/









module.exports = router;