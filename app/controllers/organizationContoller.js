const { organizationModel } = require("../models");


const organizationController = {
    async getAllOrganizations(req,res){
        const organizations = await organizationModel.findAll();
        res.json(organizations);
    },
    async  addOrganization(req, res) {
        const { id, name, member_id } = req.body;
        try {
                return res.status(200).json("Organization ajoutée avec succes");
        }       
                catch (error) {
                    return res.status(500).json("Erreur ajout d'oraganization'");
                }
                    
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