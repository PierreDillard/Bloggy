
const express = require('express');
const router = express.Router();
const { memberController } = require("../controllers/index");
const security = require ('../service/security');
//const validationModule = require('../validation/validationModule');
//const {  schemaMember } = require("../validation/schema");
// Toutes mes urls commencent par /members

// /api/member/ -> GET...OK
router.get("/",memberController.getAllMembers);

// "/api/member/ajouter Member -> POST"....OK
router.post("/addMember", memberController.addMember);

// "/api/member/voir Un Member -> GET"....OK
router.get("/:id", security.checkAdmin, security.checkPro, memberController.getMember);


router.patch("/:id",memberController.modifyMember);


// "/api/member/DELETE member -> DELETE"....OK
router.delete("/:id",memberController.deleteMember);

module.exports = router;