const express = require('express');
const { commentController } = require("../controllers/index.js");
//const validationModule = require('../validation/validationModule');
//const {  schemaComment } = require("../validation/schema");
const router = express.Router();

//importation du module SECURITY.JS
const security = require ('../service/security');



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
/**
 * POST /api/comments
 * @summary Ajoute un comment
 * @tags Comments
 * @param {Comment} request.body.required - Comment
 * @return {object} 200 - retourne la catégorie créée
 * @return {object} 500 - Unexpected error
 */




//***MISE EN PLACE DE RESTRICTION avec attribution de roles (Admin=checkAdmin, Pro=checkPro, Visiteur=checkUser) "d'utilisation de fonctionalités" SUR LES ROUTES***


// /api/comment/ -> voir les COMMENTS avec autorisation pour l'Admin et le Pro...-> GET...OK
router.get("/",commentController.getAllComments);


// "/api/comment/ -> ajouter un COMMENT avec autorisation pour l'Admin et le Pro. -> POST"....OK
router.post("/addComment",security.checkAdmin, security.checkPro, commentController.addComment);


// "/api/comment/ -> {numero de son id}...voir un COMMENT grâce a son numero id avec autorisation pour l'Admin et le Pro. -> GET"....OK
router.get("/:id",security.checkAdmin, security.checkPro, commentController.getComment);


// "/api/comment/ -> {numero de son id}...modifier et mettre à jour une COMMENT grâce a son numero  id avec autorisation pour l'Admin et le Pro. -> PATCH"....OK
router.patch("/:id",security.checkAdmin, security.checkPro,commentController.modifyComment);


// "/api/comment/ -> {numero de son id}...effacer une COMMENT grâce a son numero id avec autorisation pour l'Admin et le Pro. -> DELETE"....OK
router.delete("/:id",security.checkAdmin, security.checkPro, commentController.deleteComment);



module.exports = router;