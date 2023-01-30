const { memberModel } = require("../models");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
// accès au variables
process.env.ACCESS_TOKEN_SECRET;
function generateAccessToken(member) {
    return jwt.sign(member, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1800s' });
}
const loginController = {
    async check(req, res) {
        //req.body.(email/password)
        console.log(req.body);
        // TODO: fetch le user depuis la db basé sur l'email passé en paramètre
        const {email, password} = req.body;
        const member = await memberModel.findByEmail(email);
        //Si on le trouve pas on renvoi une 404
        if(!member){
            return res.status(404).json("Utilisateur inconnu")
        }
        //On compare les passwords, si ça ne match pas -> 401
        const pswdIsValid = await bcrypt.compare(password, member.password);
        if(!pswdIsValid){
            return res.status(401).json("bad password");
        }       
        //On enlève le password de l'objet member (pas de la DB)
        delete member.password;
        //On génére un token
        const token = generateAccessToken(member);
        //On l'envoi vers l'extérieur
        res.status(200).json({member, token})
    }
};
module.exports = loginController;











