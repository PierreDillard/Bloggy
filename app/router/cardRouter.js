const express = require('express');
const { cardController } = require("../controllers/index.js");
const { route } = require('./loginRouter.js');
//const validationModule = require('../validation/validationModule');
//const {  schemaCard } = require("../validation/schema");
const router = express.Router();
const security = require ('../service/security');
const upload = require ('../service/uploader');

// Toutes mes urls commencent par /cards

/**
 * Une card 
 * @typedef {object} Card
 * @property {string} route - Url de la card
 * @property {string} label - Nom de la card
 */

/**
 * GET /api/cards
 * @summary Retourne l'ensemble des cards
 * @tags cards
 * @return {array<Cards>} 200 - Liste de cards
 * @return {Error} 500 - Unexpected error
 */
/**
 * POST /api/cards
 * @summary Ajoute une card
 * @tags CardS
 * @param {Card} request.body.required - Card
 * @return {object} 200 - retourne la card créée
 * @return {object} 500 - Unexpected error
 */

//sur la route post multer upload un fichier qui déclanche un fonction qui console log le req.body et le req.file
/*router.post('/test',upload.single('uploaded_file'),function(req,res)
{
    console.log('file :',req.file);
    console.log('body :',req.body);
    res.status(200).json('upload ok')
});*/


//***MISE EN PLACE DE RESTRICTION avec attribution de roles (Admin=checkAdmin, Pro=checkPro, Visiteur=checkUser) "d'utilisation de fonctionalités" SUR LES ROUTES***

// /api/card/ -> voir les CARDS ...-> GET...OK
router.get("/", cardController.getAllCards);

// "/api/card/ -> ajouter une CARD avec autorisation pour l'Admin et le Pro. -> POST"....OK
router.post("/addCard", security.checkPro, upload.single('uploaded_file'), cardController.addCard);

// "/api/card/ -> {numero de son id}...voir une CARD grâce a son numero id. -> GET"....OK
router.get("/:id", cardController.getCard);

// "/api/card/ -> {numero de son id}...modifier et mettre à jour une CARD grâce a son numero  id avec autorisation pour l'Admin et le Pro. -> PATCH"....OK
router.patch("/:id",security.checkPro,  upload.single('uploaded_file'),cardController.modifyCard);

// "/api/card/ -> {numero de son id}...effacer une CARD grâce a son numero id avec autorisation pour l'Admin et le Pro. -> DELETE"....OK
router.delete("/:id", security.checkPro, cardController.deleteCard);


module.exports = router;