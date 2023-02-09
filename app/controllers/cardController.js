const { cardModel } = require("../models");


const cardController = {
    async getAllCards(req, res) {
        const cards = await cardModel.findAll();
        console.log(req.session);
        return res.status(200).json(cards);
    },
    async addCard(req, res) {
        //On déconstruit l'objet req.body contenant les info du formulaire.
        const { author, description, url, type, member_id } = req.body;
        console.log(req.body);
        //On vérifie la présence éventuelle d'une carte ayant la même description
        const card = await cardModel.findByDescription(description);
        //Si elle existe on renvoi une 401 et on arête les traitements.
        if (card) {
            return res.status(401).json("Cette card est déjà présente en bdd");
        }
        //Si elle n'existe on va créer une nouvelle carte selon le type de carte demandé.
        //Si ce n'est pas une news, req.file contient les infos de l'upload de l'image ou de la video.
        //  Ternary operator : test ? si oui : si non 
        const newCard = {
            author: author,
            description: description,
            //Si type est égal a news on met l'url recu dans le form sinon on met le filename du média uploadé
            url: type === "news" ? url : req.file.filename,
            type: type,
            member_id: member_id
        };
        //Finalement on l'envoi en base de données
        const cardDb = await cardModel.insert(newCard);
        res.status(200).json(cardDb);

    },
    async getCard(req, res) {

        const card = await cardModel.findById(req.params.id);

        return res.status(200).json(card);
    },

    async modifyCard(req, res) {
        const card = req.body; // les modifications apportées à card
        card.id = req.params.id;
        const update = await cardModel.findById(req.params.id);
        for (const key in req.body) {
            update[key] = req.body[key]
            console.log(update);
        }

        const cardDb = await cardModel.update(update); //il faut envoyer update au lieu de card (pourquoi?)

        res.json(cardDb);
    },
    async deleteCard(req, res) {

        const result = await cardModel.delete(req.params.id);

        res.status(200).json(result);
    }
};

module.exports = cardController;