
/*******************************************/
/* Fichier de configuration de mes routes */
/*******************************************/
const express = require("express");
const paperRouter = require("./paperRouter");
const loginRouter = require("./loginRouter");
const memberRouter = require("./memberRouter");
const cardRouter = require("./cardRouter");
const commentRouter = require("./commentRouter");
const labelRouter = require("./labelRouter");
const mediaRouter = require("./mediaRouter");
const organizationRouter = require("./organizationRouter");


const router = express.Router();
router.use("/paper",paperRouter);
router.use("/login",loginRouter);
router.use("/member",memberRouter);
router.use("/card",cardRouter);
router.use("/comment",commentRouter);
router.use("/label",labelRouter);
router.use("/media",mediaRouter);
router.use("/organization",organizationRouter);

module.exports = router;