const { mediaModel } = require("../models");


const mediaController = {
    async getAllMedias(req,res){
        const medias = await mediaModel.findAll();
        res.json(medias);
    },
    async  addMedia(req, res) {
        const { type, url, member_id, card_id} = req.body;
        console.log(req.body);
        const media = await mediaModel.findByMember_id(member_id);
        console.log("Is findByMember_id problem ?"); 
        if(media) {
            return res.status(401).json("Ce media est déjà présente en bdd");
        }
    const newMedia = {
        type : type,
        url : url,
        member_id : member_id,
        card_id : card_id
    }
    //Finalement on l'envoi en base de données
    const mediaDb = await mediaModel.insert(newMedia);
    res.status(200).json(mediaDb);


            },
    async getMedia(req,res){

        const media = await mediaModel.findById(req.params.id);

        res.json(media);
    },
    async modifyMedia(req,res){
        const media = req.body; // les modifications apportées à media

        media.id = req.params.id;
        const mediaDB = await mediaModel.update(media);

        res.json(mediaDB);
    },
    async deleteMedia(req,res){

        const result = await mediaModel.delete(req.params.id);

        res.json(result);
    }
};

module.exports = mediaController;