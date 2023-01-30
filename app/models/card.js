const client = require("./dbClient");
const { cpSync } = require("fs");

const cardModel = {
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
        let cards
        try{
            const result = await client.query("SELECT * FROM card;");
            cards = result.rows;

        }catch(err){
            console.log(err);
        }

        return cards;
    },
    async insert(card){
        let cardDB;
       
        try{
            const sqlQuery = "INSERT INTO card(description, url, type, member_id) VALUES ($1, $2, $3, $4) RETURNING *;";
            const values = [card.description,card.url, card.type, card.member_id];
            const result = await client.query(sqlQuery,values);
            cardDB = result.rows[0];

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
    async update(card) {
        let cardDB;
        try {
        const sqlQuery = "SELECT * FROM update_card($1)";
          const values = [card];

          const result = await client.query(sqlQuery, values);
          return result.rows[0];
        

        }catch(err){
            console.log(err);
        }
        return cardDB
                     
    },
    async delete(id){
       
        try{
            const sqlQuery = `DELETE FROM public.card
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

module.exports = cardModel;