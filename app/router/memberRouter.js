
const express = require('express');
const router = express.Router();
const { memberController } = require("../controllers/index");
//const validationModule = require('../validation/validationModule');
//const {  schemaMember } = require("../validation/schema");

// Toutes mes urls commencent par /members

// /api/member/ -> GET
router.get("/",memberController.getAllMembers);
// "/api/member/addMember -> POST"
router.post("/addMember", memberController.addMember);


router.get("/:id",memberController.getMember);

router.patch("/:id",memberController.modifyMember);

router.delete("/:id",memberController.deleteMember);

module.exports = router;