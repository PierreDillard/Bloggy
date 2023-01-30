const express = require('express');
const { mediaController } = require("../controllers/index");
//const validationModule = require('../validation/validationModule');
//const {  schemaMedia } = require("../validation/schema");
const router = express.Router();

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
router.get("/",mediaController.getAllMedias);
/**
 * POST /api/medias
 * @summary Ajoute un media
 * @tags Medias
 * @param {Media} request.body.required - Media
 * @return {object} 200 - retourne le media créée
 * @return {object} 500 - Unexpected error
 */
router.post("/",mediaController.addMedia);

router.get("/:id",mediaController.getMedia);
router.patch("/:id",mediaController.modifyMedia);
router.delete("/:id",mediaController.deleteMedia);

module.exports = router;