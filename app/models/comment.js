const client = require("./dbClient");
const { cpSync } = require("fs");

const commentModel = {
    async findByMember_id(member_id){
        try{
            const sqlQuery = `SELECT * FROM card WHERE member_id = $1;`;
            const values = [member_id];
            const result = await client.query(sqlQuery, values);
            return result.rows[0];

        }catch(err){
            console.log(err);
        }
    },
    async findAll(){
        let comments
        try{
            const result = await client.query("SELECT * FROM comment;");
            comments = result.rows;

        }catch(err){
            console.log(err);
        }

        return comments;
    },
    async insert(comment){
        let commentDB;
       
        try{
            const sqlQuery = "INSERT INTO comment(member_id, card_id, content) VALUES ($1, $2, $3) RETURNING *;";
            const values = [comment.member_id, comment.card_id, comment.content];
            const result = await client.query(sqlQuery,values);
            commentDB = result.rows[0];

        }catch(err){
            console.log(err);
        }
        
    },
    async findById(id){
        let comment;
        try{
            const sqlQuery = "SELECT * FROM comment WHERE id=$1;";
            const values = [id];
            const result = await client.query(sqlQuery,values);
            comment = result.rows[0];

         }catch(err){
            console.log(err);
        }
        return comment;
    },
    async update ({ id, member_id, card_id, content}) {
        let comment;
        try{
            const sqlQuery = "UPDATE comment SET member_id=$1, card_id=$2, content=$3, WHERE id=$4 RETURNING *";
            const values = [member_id, card_id, content,id];

            const result = await client.query(sqlQuery,values);
            comment = result.rows[0];
            }catch(err){
            throw new Error(`Failed to update comment: ${error}`);
        }
        return comment;
    },
    async delete(id){
       
        try{
            const sqlQuery = `DELETE FROM public.comment
            WHERE id=$1;`;
            const values = [id];
            const result = await client.query(sqlQuery,values);
           return result;
            // à voir ce que je remonte

        }catch(err){
            console.log(err);
        }
        return;
    }
};

module.exports = commentModel;