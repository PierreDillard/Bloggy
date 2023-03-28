const { commentModel } = require("../models");


const commentController = {
    async getAllComments(req,res){
        const Comments = await commentModel.findAll();
        res.json(Comments);
    },
    async addComment(req, res) {
       
        const {  author, member_id, card_id, content } = req.body;
        console.log(req.body);
        const comment = await commentModel.findByContent(content);
    console.log("Is findByContent problem ? ");
        if(comment) {
            return res.status(401).json("Ce content est déjà présente en bdd");
        // Code to add card to database using the destructured variables
      
        //return res.status(500).json;
        }
    const newComment = {
         author : author,
         member_id : member_id,
         card_id : card_id,
         content : content
    }
    console.log(newComment);
//Finalement on l'envoi en base de données
const commentDb = await commentModel.insert(newComment);
res.status(200).json(commentDb);
                    
    },

    async getComment(req,res){

        const comment = await commentModel.findById(req.params.id);

        res.json(comment);
    },

    async modifyComment(req,res){
        const comment = req.body; // les modifications apportées à card
        comment.id = req.params.id;
        const update = await commentModel.findById(req.params.id);
        for(const key in req.body){
            update[key]= req.body[key]
            console.log(update);
        }

        const commentDb = await commentModel.update(update); //renvoyer update au lieu de comment

        res.json(commentDb);
    },

    async deleteComment(req,res){

        const result = await commentModel.delete(req.params.id);

        res.json(result);
    }
};

module.exports = commentController;