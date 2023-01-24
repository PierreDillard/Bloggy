const debug = require("debug")("SQL");

const { Pool } = require('pg');
const pool = new Pool(); // le pool permet de gérer plusieurs clients en même temps

module.exports = {
    // je vais mettre en place un système de tracking de mes requêtes

    // j'enregistre le pool originel dans l'objet que j'exporte
    originalPool: pool,

    async query(...params){
        // j'ajoute l'appel à debug pour afficher le détail de ma requête
        debug(...params);

        return this.originalPool.query(...params);
    }
};

// l'export standard (sans le tracking) :
// module.exports = pool;