
const express = require('express');
const router = express.Router();
const { memberController } = require("../controllers/index");
const security = require ('../service/security');
//const validationModule = require('../validation/validationModule');
//const {  schemaMember } = require("../validation/schema");
// Toutes mes urls commencent par /members

// /api/member/ -> GET...OK
router.get("/",memberController.getAllMembers);

// "/api/member/ajouterMember -> POST"....OK
router.post("/addMember", memberController.addMember);

// "/api/member/avoirUnMember -> GET"....OK
router.get("/:id",security.check,memberController.getMember);


router.patch("/:id",memberController.modifyMember);


// "/api/member/DELETEmember -> DELETE"....OK
router.delete("/:id",memberController.deleteMember);

module.exports = router;