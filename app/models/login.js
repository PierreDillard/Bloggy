const client = require("./dbClient.js");



const loginModel = {
    //Function findByPseudo : retrieve a Member by Pseudo 
    async findByPseudo(pseudo){
        try{
            const result = await client.query(member);

        }catch(err){
            console.log(err);
                }
        return pseudo;
    },


    async insert(login){
        let loginDB;
        try{
            const sqlQuery = "SELECT * FROM insert_login($1)";
            const values = [login];

            const result = await client.query(sqlQuery,values);
            loginDB = result.rows[0];

        }catch(err){
            console.log(err);
        }

        return loginDB;
    },

    async findByConnect(id){
        let login;
        try{
            const sqlQuery = "SELECT * FROM pseudo WHERE login;";
            const result = await client.query(sqlQuery,values);
            login = result.rows[0];

        }catch(err){
            console.log(err);
        }

        return connect;
    },
}
    

module.exports = loginModel;