const express = require('express');
const { cardController } = require("../controllers/index.js");
const { route } = require('./loginRouter.js');
//const validationModule = require('../validation/validationModule');
//const {  schemaCard } = require("../validation/schema");
const router = express.Router();

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
router.get("/",cardController.getAllCards);


/**
 * POST /api/cards
 * @summary Ajoute une card
 * @tags CardS
 * @param {Card} request.body.required - Card
 * @return {object} 200 - retourne la card créée
 * @return {object} 500 - Unexpected error
 */
router.post("/addCard",cardController.addCard);

router.get("/:id",cardController.getCard);
router.patch("/:id",cardController.modifyCard);
router.delete("/:id",cardController.deleteCard);

module.exports = router;