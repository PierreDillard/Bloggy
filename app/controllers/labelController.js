const { labelModel } = require("../models");


const labelController = {
    async getAllLabels(req,res){
        const labels = await labelModel.findAll();
        res.json(labels);
    },
    async addLabel(req,res){
        const { id, content, media_id } = req.body;
        try {
                return res.status(200).json("Label ajoutée avec succes");
        }       
                catch (error) {
                    return res.status(500).json("Erreur ajout de label");
                }
    },
    async getLabel(req,res){

        const label = await labelModel.findById(req.params.id);

        res.json(label);
    },
    async modifyLabel(req,res){
        const label = req.body; // les modifications apportées à label

        label.id = req.params.id;
        const labelDB = await labelModel.update(label);

        res.json(labelDB);
    },
    async deleteLabel(req,res){

        const result = await labelModel.delete(req.params.id);

        res.json(result);
    }
};

module.exports = labelController;