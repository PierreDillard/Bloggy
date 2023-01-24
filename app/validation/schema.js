const Joi = require('joi');

// Joi nous permet de préciser la forme de ce qui est attendu
const schemaQuery = Joi.object({
    name: Joi.string(),
    verb: Joi.string(),
    adjective: Joi.string(),
    complement: Joi.string()
});

const schemaCategory = Joi.object({
    route: Joi.string().required(),
    label: Joi.string().required()
}).required();

const schemaPost = Joi.object({
    title:Joi.string().required(),
    slug:Joi.string().required(),
    excerpt:Joi.string().required(),
    content:Joi.string().required(),
    categoryId:Joi.number().integer().positive().required()
}).required();


module.exports = { schemaQuery , schemaCategory , schemaPost };