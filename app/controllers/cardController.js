const { cardModel } = require("../models");


const cardController = {
    async getAllCards(req,res){
        const cards = await cardModel.findAll();
        console.log(req.body);
        return res.status(200).json(cards);
    },
    async addCard(req, res) {
       
            const {  description, url, type, member_id } = req.body;
            console.log(req.body);
            const card = await cardModel.findByDescription(description);
        console.log("Is findByEmail problem ? ");
            if(card) {
                return res.status(401).json("Cette card est déjà présente en bdd");
            // Code to add card to database using the destructured variables
          
            //return res.status(500).json;
            }
        const newCard = {
            description : description,
            url : url,
            type : type,
            member_id : member_id
        }
    //Finalement on l'envoi en base de données
    const cardDb = await cardModel.insert(newCard);
    res.status(200).json(cardDb);
          
    },
    async getCard(req,res){

        const card = await cardModel.findById(req.params.id);

        return res.status(200).json(card);
    },

    async modifyCard(req,res){
        const card = req.body; // les modifications apportées à card
        card.id = req.params.id;
        const update = await cardModel.findById(req.params.id);
        for(const key in req.body){
            update[key]= req.body[key]
            console.log(update);
        }

        const cardDb = await cardModel.update(card);

        res.json(cardDb);
    },
    async deleteCard(req,res){

        const result = await cardModel.delete(req.params.id);

        res.json(result);
    }
};

module.exports = cardController;