/*******************************************/
/* Fichier de configuration de mon serveur */
/*******************************************/


require("dotenv").config();

const express = require('express');
const router = require('./app/router');
var session = require('express-session')
const multer = require('multer');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require("body-parser");
const app = express();
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true,
  // à voir combien je mets
  cookie: { maxAge:1000605,  
    sameSite: true }
  }));
  //******* APP.USE(SESSION) *************/
  // Ce code est une configuration pour une session utilisant le middleware "session" dans une application Express.js.
  // secret est une chaîne de caractères utilisée pour signer le cookie de session pour empêcher la modification du contenu.
  // resave détermine si la session doit être sauvegardée dans le magasin de sessions même si elle n'a pas été modifiée.
  // saveUninitialized détermine si une session non initialisée doit être sauvegardée.
  // cookie est un objet qui définit les options pour le cookie de session, telles que maxAge qui définit la durée de vie
  //du cookie en millisecondes et sameSite qui spécifie si le cookie peut être envoyé avec des demandes depuis un autre domaine.

  const port = process.env.PORT || 3000;


//morgan permet de definir les infos que le serveur affiche dans la console à chaque fois qu'il recoit une requete http.
app.use(morgan('combined'));

//cors permet de configurer comment des applications web définies sur un autre domaine peuvent accéder aux ressources de votre serveur.
//Faire appel à ce package sans lui passer d’arguments permet d’autoriser tous les accès à votre ressource.
app.use(cors()); 

//body-parser permet de décomposer les requêtes HTTP POST, PATCH, etc. afin de pouvoir extraire les informations transmises dans des formulaires. 
//Ces informations apparaissent dans le champ req.body.
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({
        extended: true
}));

// PREFIXER AVEC API
app.use('/api', router);

//permet de définir les routes dans le fichier router.js.
app.use(router); 

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});