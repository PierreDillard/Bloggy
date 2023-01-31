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
checkUser(req,res,next){
    console.log(req.session);
    if (req.session.user.role=='visiteur'){
        next()
   
} else{
        res.status(401).json();
        console.log('checkUser');
    }
},
checkAdmin(req,res,next){
    console.log(req.session);
    if (req.session.user.role=='admin'){
        next()
   
} else{
        res.status(401).json();
        console.log('checkAdmin');
    }
}


};

module.exports = security;