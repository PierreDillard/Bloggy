const security = {
    check(req,res,next){
        if (req.session.user.role=='admin'){
            next()
       
    } else{
            res.status(401).json
            console.log('check');
        }



}
};

module.exports = security;