const express = require('express');
const { mediaController } = require("../controllers/index");
//const validationModule = require('../validation/validationModule');
//const {  schemaMedia } = require("../validation/schema");
const router = express.Router();
const security = require ('../service/security');
// Toutes mes urls commencent par /medias

/**
 * Une media 
 * @typedef {object} Media
 * @property {string} route - Url de la media
 * @property {string} label - Nom de la media
 */

/**
 * GET /api/medias
 * @summary Retourne l'ensemble des medias
 * @tags medias
 * @return {array<Media>} 200 - Liste de medias
 * @return {Error} 500 - Unexpected error
 */
/**
 * POST /api/medias
 * @summary Ajoute un media
 * @tags Medias
 * @param {Media} request.body.required - Media
 * @return {object} 200 - retourne le media créée
 * @return {object} 500 - Unexpected error
 */



//***MISE EN PLACE DE RESTRICTION avec attribution de roles (Admin=checkAdmin, Pro=checkPro, Visiteur=checkUser) "d'utilisation de fonctionalités" SUR LES ROUTES***


// /api/media/ -> voir les MEDIAS avec autorisation pour l'Admin et le Pro...-> GET...OK
router.get("/",security.checkPro, mediaController.getAllMedias);

// "/api/media/ -> ajouter un MEDIA avec autorisation pour l'Admin et le Pro. -> POST"....OK
router.post("/addMedia", security.checkPro, mediaController.addMedia);

// "/api/media/ -> {numero de son id}...voir un MEDIA grâce a son numero id avec autorisation pour l'Admin et le Pro. -> GET"....OK
router.get("/:id", security.checkPro, mediaController.getMedia);

// "/api/media/ -> {numero de son id}...modifier et mettre à jour une MEDIA grâce a son numero  id avec autorisation pour l'Admin et le Pro. -> PATCH"....OK
router.patch("/:id", security.checkPro, mediaController.modifyMedia);

// "/api/media/ -> {numero de son id}...effacer une MEDIA grâce a son numero id avec autorisation pour l'Admin et le Pro. -> DELETE"....OK
router.delete("/:id", security.checkPro,mediaController.deleteMedia);



module.exports = router;