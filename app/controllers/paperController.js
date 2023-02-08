const { paperModel } = require("../models");


const paperController = {
    async getAllPapers(req,res){
        const papers = await paperModel.findAll();
        res.json(papers);
    },
    async  addPaper(req, res) {
        const {url, title, description } = req.body;
        console.log(req.body);
        const paper = await paperModel.findByTitle(description);
        console.log("Is findByDescription problem ?"); 
        if(paper) {
            return res.status(401).json("Ce paper est déjà présente en bdd");
        }
    const newPaper = {
        url : url,
        title : title,
        description  : description,
        }
    //Finalement on l'envoi en base de données
    const paperDb = await paperModel.insert(newPaper);
    res.status(200).json(paperDb);


    },
    async getPaper(req,res){

        const paper = await paperModel.findById(req.params.id);

        return res.status(200).json(paper);
    },
    async modifyPaper(req,res){
        const paper = req.body; // les modifications apportées à paper
        paper.id = req.params.id;
        const update = await paperModel.findById(req.params.id);
        for(const key in req.body){
            update[key]= req.body[key]
            console.log(update);
        }

        const paperDb = await paperModel.update(paper);

        res.json(paperDb);
    },
    async deletePaper(req,res){

        const result = await paperModel.delete(req.params.id);

        res.json(result);
    }
};

module.exports = paperController;