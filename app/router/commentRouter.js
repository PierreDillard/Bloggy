const express = require('express');
const { commentController } = require("../controllers/index.js");
//const validationModule = require('../validation/validationModule');
//const {  schemaComment } = require("../validation/schema");
const router = express.Router();

// Toutes mes urls commencent par /comment

/**
 * Une comment 
 * @typedef {object} Comment
 * @property {string} route - Url de la comment
 * @property {string} label - Nom de la comment
 */

/**
 * GET /api/comments
 * @summary Retourne l'ensemble des comments
 * @tags Comments
 * @return {array<Catégorie>} 200 - Liste de comments
 * @return {Error} 500 - Unexpected error
 */
router.get("/",commentController.getAllComments);
/**
 * POST /api/comments
 * @summary Ajoute un comment
 * @tags Comments
 * @param {Comment} request.body.required - Comment
 * @return {object} 200 - retourne la catégorie créée
 * @return {object} 500 - Unexpected error
 */
router.post("/",commentController.addComment);

router.get("/:id",commentController.getComment);
router.patch("/:id",commentController.modifyComment);
router.delete("/:id",commentController.deleteComment);

module.exports = router;