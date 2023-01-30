const client = require("./dbClient");
const { cpSync } = require("fs");

const labelModel = {
    async findByLabel_id(media_id){
        try{
            const sqlQuery = `SELECT * FROM card WHERE media_id = $1;`;
            const values = [media_id];
            const result = await client.query(sqlQuery, values);
            return result.rows[0];

        }catch(err){
            console.log(err);
        }
    },
    async findAll(){
        let labels
        try{
            const result = await client.query("SELECT * FROM label;");
            labels = result.rows;

        }catch(err){
            console.log(err);
        }

        return labels;
    },
    async insert(label){
        let labelDB;
        try{
            const sqlQuery = "INSERT INTO label(content, media_id) VALUES ($1, $2) RETURNING *;";
            const values = [label.content, label.media_id];
            const result = await client.query(sqlQuery,values);
            labelDB = result.rows[0];

        }catch(err){
            console.log(err);
        }
        return labelDB
    },
    async findById(id){
        let label;
        try{
            const sqlQuery = "SELECT * FROM label WHERE id=$1;";
            const values = [id]; 
            const result = await client.query(sqlQuery,values);
            label = result.rows[0];

        }catch(err){
            console.log(err);
        }

        return label;
    },
    async update(label){
        let labelDB;
        try{
            // const sqlQuery = `UPDATE public.label
            // SET route=$1, label=$2
            // WHERE id=$3 RETURNING *;`;
            // const values = [label.route,label.label,id];

            const sqlQuery = "SELECT * FROM update_label($1)";
            const values = [label];

            const result = await client.query(sqlQuery,values);
            labelDB = result.rows[0];

         }catch(err){
            console.log(err);
        }
        return labelDB;
    },
    async delete(id){
       
        try{
            const sqlQuery = `DELETE FROM public.label
            WHERE id=$1;`;
            const values = [id];
            const result = await client.query(sqlQuery,values);
           
            // à voir ce que je remonte
            
         }catch(err){
            console.log(err);
        }

        return;
    }
};

module.exports = labelModel;