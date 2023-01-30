const client = require("./dbClient");


const commentModel = {
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
        return commentDB
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
    async update(comment){
        let commentDB;
        try{
            // const sqlQuery = `UPDATE public.card
            // SET route=$1, label=$2
            // WHERE id=$3 RETURNING *;`;
            // const values = [card.route,card.label,id];

            const sqlQuery = "SELECT * FROM update_comment($1)";
            const values = [comment];

            const result = await client.query(sqlQuery,values);
            commentDB = result.rows[0];

         }catch(err){
            console.log(err);
        }
        return commentDB;
    },
    async delete(id){
       
        try{
            const sqlQuery = `DELETE FROM public.comment
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

module.exports = commentModel;