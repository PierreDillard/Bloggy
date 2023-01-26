const router = express.Router();
const express = require("express");

const authController = ('/login', (req, res) => {
     res.send('PAGE AUTHENTIFICATION');
});


module.exports = authController;