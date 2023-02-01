const { memberModel } = require("../models");
const bcrypt = require('bcrypt');

const memberController = {
    async getAllMembers(req,res){
        console.log(req.body);
        const members = await memberModel.findAll();
        res.json(members);
        
    },
    async addMember(req,res){
        //On récupére le contenu de notre body(aka le contenu du formulaire front)
        //req.body {pseudo:didier, email:dhzuhdu, role, password}
        const { pseudo, email, password } = req.body;
        console.log(req.body);
        // Est-ce que mon user existe ? 
        const member = await memberModel.findByEmail(email);
        console.log("Is findByEmail problem ? ");
        if(member) {
            return res.status(401).json("Cette email est déjà présente en bdd");
        }

        //On génére un objet newUser : 
        //On génére un sel pour bcrypt afin de chiffrer nos mots de passe
        const salt = await bcrypt.genSalt(10);
        const newUser = {
            pseudo : pseudo,
            email : email,
            password : await bcrypt.hash(password, salt),
            role : 'pro'  
        };
        //Finalement on l'envoi en base de données
        const memberDb = await memberModel.insert(newUser);
        res.status(200).json(memberDb);
    },

    
    async getMember(req,res){

        const member = await memberModel.findById(req.params.id);
        if(!member){
            res.status(404).json(`Aucun utilsateur pour l'id : ${req.params.id}`);
        }

        res.status(200).json(member);
    },

    async modifyMember(req,res){
        // TODO : See how made sequential updates.
        const member = req.body; // les modifications apportées à member
        member.id = req.params.id;
        const update = await memberModel.findById(req.params.id);
        for(const key in req.body){
            update[key]= req.body[key]
            console.log(update);
        }
        const memberDb = await memberModel.update(member);

        res.json(memberDb);
    },


    async deleteMember(req,res){

        const result = await memberModel.delete(req.params.id);

        res.status(200).json(result);
    }
};

module.exports = memberController;