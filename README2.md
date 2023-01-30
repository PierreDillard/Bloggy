
index.js (router)

const cardRouter = require("./card");

const commentRouter = require("./comment");

const labelRouter = require("./label");

const mediaRouter = require("./media");

const memberRouter = require("./member");

const organizationRouter = require("./organization");
   
   
   
   router.use("./card",cardRouter);
   router.use("./comment",commentRouter);
   router.use("./label",labelRouter);
   router.use("./media",mediaRouter);
   router.use("./member",memberRouter);
   router.use("./organization",organizationRouter);
   ***********************************************

 