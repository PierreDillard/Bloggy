const { mediaModel } = require("../models");


const mediaController = {
    async getAllMedias(req,res){
        const medias = await mediaModel.findAll();
        res.json(medias);
    },
    async  addMedia(req, res) {
        const { id, description, url, type, member_id, card_id} = req.body;
        try {
                return res.status(200).json("Media ajoutée avec succes");
        }       
                catch (error) {
                    return res.status(500).json("Erreur ajout de media");
                }
                    
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