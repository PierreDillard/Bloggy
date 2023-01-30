const express = require('express');
const { labelController } = require("../controllers/index");
//const validationModule = require('../validation/validationModule');
//const {  schemaLabel } = require("../validation/schema");
const router = express.Router();

// Toutes mes urls commencent par /labels

/**
 * Une label 
 * @typedef {object} Label
 * @property {string} route - Url du label
 * @property {string} label - Nom du label
 */

/**
 * GET /api/labels
 * @summary Retourne l'ensemble des labels
 * @tags labels
 * @return {array<Label>} 200 - Liste de labels
 * @return {Error} 500 - Unexpected error
 */
router.get("/",labelController.getAllLabels);
/**
 * POST /api/labels
 * @summary Ajoute un label
 * @tags Labels
 * @param {Label} request.body.required - Label
 * @return {object} 200 - retourne le label créé
 * @return {object} 500 - Unexpected error
 */
router.post("/",labelController.addLabel);

router.get("/:id",labelController.getLabel);
router.patch("/:id",labelController.modifyLabel);
router.delete("/:id",labelController.deleteLabel);

module.exports = router;