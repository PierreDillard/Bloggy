const express = require('express');
const { organizationController } = require("../controllers/index");
//const validationModule = require('../validation/validationModule');
//const {  schemaOrganization } = require("../validation/schema");
const router = express.Router();
const security = require ('../service/security');
// Toutes mes urls commencent par /organizations

/**
 * Une organization 
 * @typedef {object} Catégorie
 * @property {string} route - Url de la organization
 * @property {string} label - Nom de la organization
 */

/**
 * GET /api/organizations
 * @summary Retourne l'ensemble des organizations
 * @tags Comments
 * @return {array<Catégorie>} 200 - Liste de organizations
 * @return {Error} 500 - Unexpected error
 */
/**
 * POST /api/organizations
 * @summary Ajoute une organization
 * @tags organizations
 * @param {Catégorie} request.body.required - organization
 * @return {object} 200 - retourne la catégorie créée
 * @return {object} 500 - Unexpected error
 */




//***MISE EN PLACE DE RESTRICTION avec attribution de roles (Admin=checkAdmin, Pro=checkPro, Visiteur=checkUser) "d'utilisation de fonctionalités" SUR LES ROUTES***


// /api/organization/ -> voir les ORGANIZATIONS.-> GET...OK
router.get("/", organizationController.getAllOrganizations);

// "/api/organization/ -> ajouter un ORGANIZATION avec autorisation pour l'Admin et le Pro. -> POST"....OK
router.post("/addOrganization",security.checkPro,organizationController.addOrganization);

// "/api/organization/ -> {numero de son id}...voir un ORGANIZATION grâce a son numero id. -> GET"....OK
router.get("/:id", organizationController.getOrganization);

// "/api/organization/ -> {numero de son id}...modifier et mettre à jour une ORGANIZATION grâce a son numero  id avec autorisation pour l'Admin et le Pro. -> PATCH"....OK
router.patch("/:id", security.checkPro, organizationController.modifyOrganization);

// "/api/organization/ -> {numero de son id}...effacer une ORGANIZATION grâce a son numero id avec autorisation pour l'Admin et le Pro. -> DELETE"....OK
router.delete("/:id", security.checkPro, organizationController.deleteOrganization);


module.exports = router;