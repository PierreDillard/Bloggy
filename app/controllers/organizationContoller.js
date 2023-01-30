const { organizationModel } = require("../models");


const organizationController = {
    async getAllOrganizations(req,res){
        const organizations = await organizationModel.findAll();
        res.json(organizations);
    },
    async  addOrganization(req, res) {
        const {  name, member_id } = req.body;
        console.log(req.body);
        const organization = await organizationModel.findByName(name);
    console.log("Is findByName problem ? ");
        if(organization) {
            return res.status(401).json("Ce name est déjà présente en bdd");
        // Code to add card to database using the destructured variables
      
        //return res.status(500).json;
        }
    const newOrganization = {
        name : name,
        member_id : member_id
    }
//Finalement on l'envoi en base de données
const organizationDb = await organizationModel.insert(newOrganization);
res.status(200).json(organizationDb);  
            },
    async getOrganization(req,res){

        const organization = await organizationModel.findById(req.params.id);

        res.json(organization);
    },
    async modifyOrganization(req,res){
        const organization = req.body; // les modifications apportées à organization

        organization.id = req.params.id;
        const organizationDB = await organizationModel.update(organization);

        res.json(organizationDB);
    },
    async deleteOrganization(req,res){

        const result = await organizationModel.delete(req.params.id);

        res.json(result);
    }
};

module.exports = organizationController;