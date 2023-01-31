
const express = require('express');
const router = express.Router();
const { memberController } = require("../controllers/index");
const security = require ('../service/security');
//const validationModule = require('../validation/validationModule');
//const {  schemaMember } = require("../validation/schema");
// Toutes mes urls commencent par /members




//***MISE EN PLACE DE RESTRICTION avec attribution de roles (Admin=checkAdmin, Pro=checkPro, Visiteur=checkUser) "d'utilisation de fonctionalités" SUR LES ROUTES***


// /api/member/ -> voir les Member avec autorisation pour l'Admin et le Pro ->GET...OK
router.get("/",security.checkAdmin, memberController.getAllMembers);


// "/api/member/ajouter un Member avec autorisation pour l'Admin et le Pro-> POST"....OK
router.post("/addMember", security.checkAdmin, security.checkPro, memberController.addMember);


// "/api/member/{numero de son id}...voir Un Member grace a son numero id avec autorisation pour l'Admin et le Pro -> GET"....OK
router.get("/:id", security.checkAdmin, memberController.getMember);


//"/api/member/ {numero de son id}...modifier ou mettre a jour un Member grace a son numero id avec autorisation pour l'Admin et le Pro -> PATCH"....OK
router.patch("/:id",security.checkAdmin, security.checkPro, memberController.modifyMember);


// "/api/member/{numero de son id} ...Effacer un Member grace a son numero id avec autorisation pour l'Admin et le Pro -> DELETE"....OK
router.delete("/:id",security.checkAdmin, security.checkPro ,memberController.deleteMember);

module.exports = router;