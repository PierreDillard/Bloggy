const client = require("./dbClient");
const { cpSync } = require("fs");

const cardModel = {
    async findByDescription(description){
        try{
            const sqlQuery = `SELECT * FROM card WHERE description = $1;`;
            const values = [description];
            const result = await client.query(sqlQuery, values);
            return result.rows[0];

        }catch(err){
            console.log(err);
        }
    },
    async findAll(){
        let cards
        try{
            const result = await client.query("SELECT * FROM card;");
            cards = result.rows;

        }catch(err){
            console.log(err);
        }

        return cards;
    },
    async insert (card){
        
        try {
          const sqlQuery = "INSERT INTO card( description, url, type, member_id) VALUES ($1, $2, $3, $4) RETURNING *;";
          const values = [card.description, card.url, card.type, card.member_id ];
      
          const result = await client.query(sqlQuery, values);
          console.log(result);
          console.log(result.rows[0]);
        return result.rows[0];
        
        }catch(err){
            console.log(err);
        }
          
             
    },
    async findById(id){
        let card;
        try{
            const sqlQuery = "SELECT * FROM card WHERE id=$1;";
            const values = [id];
            const result = await client.query(sqlQuery,values);
            card = result.rows[0];

        }catch(err){
            console.log(err);
        }

        return card;
    },
    async updateCard({ id, description, url, type, member_id }) {
        let updatedCard;
        try {
          const sqlQuery = "UPDATE card SET description=$1, url=$2, type=$3, member_id=$4 WHERE id=$5 RETURNING *";
          const values = [description, url, type, member_id, id];
      
          const result = await client.query(sqlQuery, values);
          updatedCard = result.rows[0];
        } catch (error) {
          console.error(`Failed to update card: ${error}`);
        }
      
        return updatedCard;
      
           
    },
    async delete(id){
       
        try{
            const sqlQuery = `DELETE FROM public.card
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

module.exports = cardModel;