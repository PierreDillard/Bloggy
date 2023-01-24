/***************************************************************/
/** Fichier de configuration de mon API **/
/*************************************************************/

const express = require("express");
const router = require("./router");
const app = express();
const errorHandler = require('./service/error/errorHandler');

/****************************/
/**** Swagger generator  ****/
/****************************/
const expressJSDocSwagger = require('express-jsdoc-swagger');

const options = {
    info: {
        version: '1.0.0',
        title: 'Bloggy',
        license: {
            name: 'MIT',
        },
    },
    security: {
        BasicAuth: {
            type: 'http',
            scheme: 'basic',
        },
    },
    baseDir: __dirname,
    // Glob pattern to find your jsdoc files (multiple patterns can be added in an array)
    filesPattern: './**/*.js',
};

expressJSDocSwagger(app)(options);

/********************************/
/**** Configuration express  ****/
/********************************/

app.use(express.json());

function ici(req,res,next){
    console.log("ici");
    next();
}
app.use(ici);

app.use("/api",router);

app.use(errorHandler._404);

app.use(errorHandler.manage);

module.exports = app;