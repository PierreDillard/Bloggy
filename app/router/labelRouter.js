const express = require('express');
const { labelController } = require("../controllers/index");
//const validationModule = require('../validation/validationModule');
//const {  schemaLabel } = require("../validation/schema");
const router = express.Router();
const security = require ('../service/security');
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
/**
 * POST /api/labels
 * @summary Ajoute un label
 * @tags Labels
 * @param {Label} request.body.required - Label
 * @return {object} 200 - retourne le label créé
 * @return {object} 500 - Unexpected error
 */






//***MISE EN PLACE DE RESTRICTION avec attribution de roles (Admin=checkAdmin, Pro=checkPro, Visiteur=checkUser) "d'utilisation de fonctionalités" SUR LES ROUTES***

// /api/label/ -> voir les LABELS avec autorisation pour l'Admin et le Pro...-> GET...OK
router.get("/", security.checkPro, labelController.getAllLabels);

// "/api/label/ -> ajouter un LABEL avec autorisation pour l'Admin et le Pro. -> POST"....OK
router.post("/addLabel", security.checkPro, labelController.addLabel);

// "/api/label/ -> {numero de son id}...voir un LABEL grâce a son numero id avec autorisation pour l'Admin et le Pro. -> GET"....OK
router.get("/:id", security.checkPro, labelController.getLabel);

// "/api/label/ -> {numero de son id}...modifier et mettre à jour une LABEL grâce a son numero  id avec autorisation pour l'Admin et le Pro. -> PATCH"....OK
router.patch("/:id", security.checkPro, labelController.modifyLabel);

// "/api/label/ -> {numero de son id}...effacer une LABEL grâce a son numero id avec autorisation pour l'Admin et le Pro. -> DELETE"....OK
router.delete("/:id", security.checkPro, labelController.deleteLabel);



module.exports = router;