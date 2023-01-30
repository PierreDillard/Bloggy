const express = require('express');
const { organizationController } = require("../controllers/index");
//const validationModule = require('../validation/validationModule');
//const {  schemaOrganization } = require("../validation/schema");
const router = express.Router();

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
router.get("/",organizationController.getAllOrganizations);

/**
 * POST /api/organizations
 * @summary Ajoute une organization
 * @tags organizations
 * @param {Catégorie} request.body.required - organization
 * @return {object} 200 - retourne la catégorie créée
 * @return {object} 500 - Unexpected error
 */
router.post("/addOrganization",organizationController.addOrganization);

router.get("/:id",organizationController.getOrganization);
router.patch("/:id",organizationController.modifyOrganization);
router.delete("/:id",organizationController.deleteOrganization);

module.exports = router;