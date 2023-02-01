//************************************************************************************

//FONCTIONS POUR ATTRIBUTIONS DES DROITS DES DIFFERENTS ROLES "Admin, Pro, visiteur"

//*************************************************************************************


//Double attribution des droits pour le PRO.. "||"="et" pour l'admin car il a des droits sur le Pro...voir utilisation sur les differents routers!!
const security = {
    checkPro(req, res, next) {
        if (req.session.user){
            if (req.session.user.role == 'pro' || req.session.user.role == 'admin') {
                next();
                    return;
            } else {
                return res.status(401).json('vous n\'etes pas administrateur');
            }

        }
        console.log('checkPro');

        return res.status(401).json('vous n\'etes pas authentifié');
    },

    //Attribution des droits pour le visiteur...voir utilisation sur les differents routers!!
    checkUser(req, res, next) {
        console.log(req.session);
        if (req.session.user) {
            if (req.session.user.role == 'visiteur') {
                next();
                    return;
            } else {
                return res.status(401).json('vous n\'etes pas administrateur');
            }

        }
        console.log('checkUser');

        return res.status(401).json('vous devez vous connecter');
    },

    //Attribution des droits pour l'Administrateur = Admin...voir utilisation sur les differents routers!!
    checkAdmin(req, res, next) {
        console.log(req.session);
        if (req.session.user) {
            if (req.session.user.role == 'admin') {
                next();
                    return;

            } else {
                return res.status(401).json('vous n\'etes pas administrateur');
            }

        }
        console.log('checkAdmin');

        return res.status(401).json('vous devez vous connecter');
    }


};

module.exports = security;