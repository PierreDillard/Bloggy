const express = require('express');
const { paperController } = require("../controllers/index");
//const validationModule = require('../validation/validationModule');
//const {  schemaMedia } = require("../validation/schema");
const router = express.Router();
const security = require ('../service/security');

// Toutes mes urls commencent par /medias

/**
 * Une media 
 * @typedef {object} Paper
 * @property {string} route - Url du paper
 * @property {string} label - Nom du paper
 */

/**
 * GET /api/paper
 * @summary Retourne l'ensemble des papers
 * @tags papers
 * @return {array<Media>} 200 - Liste des papers
 * @return {Error} 500 - Unexpected error
 */
/**
 * POST /api/papers
 * @summary Ajoute un paper
 * @tags Papers
 * @param {Papers} request.body.required - Paper
 * @return {object} 200 - retourne le paper créée
 * @return {object} 500 - Unexpected error
 */



//***MISE EN PLACE DE RESTRICTION avec attribution de roles (Admin=checkAdmin, Pro=checkPro, Visiteur=checkUser) "d'utilisation de fonctionalités" SUR LES ROUTES***


// /api/media/ -> voir les PAPERS.-> GET...OK
router.get("/", paperController.getAllPapers);

// "/api/paper/ -> ajouter un PAPER avec autorisation pour l'Admin et le Pro. -> POST"....OK
router.post("/addPaper", security.checkPro ,paperController.addPaper);

// "/api/paper/ -> {numero de son id}...voir un PAPER grâce a son numero son numero id. -> GET"....OK
router.get("/:id", paperController.getPaper);

// "/api/paper/ -> {numero de son id}...modifier et mettre à jour une PAPER grâce a son numero  id avec autorisation pour l'Admin et le Pro. -> PATCH"....OK
router.patch("/:id", security.checkPro, paperController.modifyPaper);

// "/api/paper/ -> {numero de son id}...effacer une PAPER grâce a son numero id avec autorisation pour l'Admin et le Pro. -> DELETE"....OK
router.delete("/:id", security.checkPro, paperController.deletePaper);



module.exports = router;