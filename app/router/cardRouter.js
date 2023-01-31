const express = require('express');
const { cardController } = require("../controllers/index.js");
const { route } = require('./loginRouter.js');
//const validationModule = require('../validation/validationModule');
//const {  schemaCard } = require("../validation/schema");
const router = express.Router();
const security = require ('../service/security');

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




//***MISE EN PLACE DE RESTRICTION avec attribution de roles (Admin=checkAdmin, Pro=checkPro, Visiteur=checkUser) "d'utilisation de fonctionalités" SUR LES ROUTES***

// /api/card/ -> voir les CARDS ...-> GET...OK
router.get("/", cardController.getAllCards);

// "/api/card/ -> ajouter une CARD avec autorisation pour l'Admin et le Pro. -> POST"....OK
router.post("/addCard",security.checkAdmin, security.checkPro, cardController.addCard);

// "/api/card/ -> {numero de son id}...voir une CARD grâce a son numero id avec autorisation pour l'Admin et le Pro. -> GET"....OK
router.get("/:id",security.checkAdmin, security.checkPro, cardController.getCard);

// "/api/card/ -> {numero de son id}...modifier et mettre à jour une CARD grâce a son numero  id avec autorisation pour l'Admin et le Pro. -> PATCH"....OK
router.patch("/:id",security.checkAdmin, security.checkPro, cardController.modifyCard);

// "/api/card/ -> {numero de son id}...effacer une CARD grâce a son numero id avec autorisation pour l'Admin et le Pro. -> DELETE"....OK
router.delete("/:id",security.checkAdmin, security.checkPro, cardController.deleteCard);


module.exports = router;