/*******************************************/
/* Fichier de configuration de mon serveur */
/*******************************************/

const http = require('http');
require("dotenv").config();
const debug = require('debug')('app');

const app = require("./app");

const server = http.createServer(app);

const PORT = process.env.PORT ?? 3000;

server.listen(PORT, () => {
    debug(`Serveur démarré : http://localhost:${PORT}`);
});