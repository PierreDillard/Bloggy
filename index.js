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
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));



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

app.get('/', (req, res) => {
    res.send('hello');
  });



// PREFIXER AVEC API
app.use('/api', router);

//permet de définir les routes dans le fichier router.js.
app.use(router); 

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});