/*******************************************/
/* Fichier de configuration de mes routes */
/*******************************************/
const express = require("express");
const router = express.Router();
//const authController = require ('./controllers/loginController');



router
    .post ('/login')
    


     
   //Le terme use signifie que la fonction middleware est exécutée quelque soit la méthode HTTP utilisée
   router
      .use((req, res) => {
              res.status(404);
              res.json({
                  error: "Page 404 page not found"
              });
          });
   
module.exports = router;