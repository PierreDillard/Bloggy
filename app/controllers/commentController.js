const { commentModel } = require("../models");


const commentController = {
    async getAllComments(req,res){
        const Comments = await commentModel.findAll();
        res.json(Comments);
    },
    async  addComment(req, res) {
        const { id, member_id, card_id, content, } = req.body;
        try {
                return res.status(200).json("Comment ajoutée avec succes");
        }       
                catch (error) {
                    return res.status(500).json("Erreur ajout de comment");
                }
                    
            },
    async getComment(req,res){

        const comment = await commentModel.findById(req.params.id);

        res.json(comment);
    },
    async modifyComment(req,res){
        const card = req.body; // les modifications apportées à comment

        card.id = req.params.id;
        const commentDB = await commentModel.update(comment);

        res.json(commentDB);
    },
    async deleteComment(req,res){

        const result = await commentModel.delete(req.params.id);

        res.json(result);
    }
};

module.exports = commentController;