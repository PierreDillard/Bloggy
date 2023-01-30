const { cardModel } = require("../models");


const cardController = {
    async getAllCards(req,res){
        const cards = await cardModel.findAll();
        res.json(cards);
    },
    async  addCard(req, res) {
        const { id, description, url, type, member_id } = req.body;
        try {
                return res.status(200).json("Card ajoutée avec succes");
        }       
                catch (error) {
                    return res.status(500).json("Erreur ajout de card");
                }
                    
            },
    async getCard(req,res){

        const card = await cardModel.findById(req.params.id);

        res.json(card);
    },
    async modifyCard(req,res){
        const card = req.body; // les modifications apportées à card

        card.id = req.params.id;
        const cardDB = await cardModel.update(card);

        res.json(cardDB);
    },
    async deleteCard(req,res){

        const result = await cardModel.delete(req.params.id);

        res.json(result);
    }
};

module.exports = cardController;