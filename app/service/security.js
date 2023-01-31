
//************************************************************************************

//FONCTIONS POUR ATTRIBUTIONS DES DROITS DES DIFFERENTS ROLES "Admin, Pro, visiteur"

//*************************************************************************************


//Double attribution des droits pour le PRO.. "||"="et" pour l'admin car il a des droits sur le Pro...voir utilisation sur les differents routers!!
const security = {
    checkPro(req,res,next){
        console.log(req.session);
        if (req.session.user.role=='pro' || req.session.user.role=='admin'){
            next()
       
    } else{
            res.status(401).json();
            console.log('checkPro');
        }
},

//Attribution des droits pour le visiteur...voir utilisation sur les differents routers!!
checkUser(req,res,next){
    console.log(req.session);
    if (req.session.user.role=='visiteur'){
        next()
   
} else{
        res.status(401).json();
        console.log('checkUser');
    }
},

//Attribution des droits pour l'Administrateur = Admin...voir utilisation sur les differents routers!!
checkAdmin(req,res,next){
    console.log(req.session);
    if (req.session.user.role=='admin'){
        next()
   
} else{
        res.status(401).json();
        console.log('check');
    }
}


};

module.exports = security;