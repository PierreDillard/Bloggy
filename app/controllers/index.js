/***********************************************/
/* Fichier de configuration de mes controllers */
/***********************************************/

const cardController = require("./card");
const commentController = require("./comment");
const labelController = require("./label");
const mediaController = require("./media");
const memberController = require("./member");
const organizationController = require("./organization");

module.exports = { cardController,commentController,labelController,mediaController,memberController, organizationController };