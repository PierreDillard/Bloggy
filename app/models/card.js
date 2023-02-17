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
          const sqlQuery = "INSERT INTO card( author, description, url, type, member_id) VALUES ($1, $2, $3, $4, $5) RETURNING *;";
          const values = [card.author, card.description, card.url, card.type, card.member_id ];
      
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
    async update(card){
        let cardDB;
        try{
         
            //***1ere façon la plus courte pour faire la requete modify/update***
            //const values = [card.description, card.url, card.type, card.member_id, card.id];
            //const sqlQuery = `UPDATE card SET author= $1, description=$2, url=$3, type = $4, member_id = $5 WHERE id=$6 RETURNING *;`;
            
            //***2eme façon plus longue pour faire la requete modify/update**

            const values = [];                          // []=tableau contenant des valeurs = author, description, url, type, member_id, id
            const parameters = [];                      // []=tableau contenant des parametres representant tout les:  noms de la propriété=$...ex: author=$1, description=$2, url=$3, type = $4, ...etc
            let counter = 1;
            
            for(const key in card){                     // "FOR IN" on lui envoi un objet "card" puis  parcourt toutes les propriétés de member (author, description, url, type, member_id, id)

            if(key!="id"){                             // La propriété "id" permet de faire le WHERE id= (en ligne 82) et qui contient aussi ttes les propriétés qui viennent de req.body
                                                        // (key!="id") veut dire que ttes les proprietes qui sont differents de id...on les enregistres la valeur à l'interieur de values et les
                                                        // les requetes SQL (ex: $1=peudo) dans parametre.

            values.push(card[key]);                     // card[key] represente = "card.author, card.description, card.url, card.type, card.member_id, card.id"

            parameters.push(`${key}=$${counter}`);      //${key}=$${counter} represente: $2=description +1 = $3=url +1 $4=type...etc 

            counter++;                                  // ajout de +1 à chaque $ 
            }
            }
            values.push(card.id);

            // "JOIN" permet de prendre chaque élément du tableau et de venir les coller ensemble, 
            //pour former une chaîne de caractère, il les sépare d'une virgule.
            const sqlQuery = `UPDATE card SET ${parameters.join()} WHERE id=$${counter} RETURNING *;`;
            // "RETURNING avec * ": permet de retourner tout les champs qui t'interessent de la ligne qui ont été modifié.
            // il retourne un objet qui represente tout les cards.
console.log(sqlQuery);
console.log(values);
            const result = await client.query(sqlQuery,values);
            cardDB = result.rows[0];
        }
        catch(err){
            console.log(err);
        }
        console.log(cardDB);  
        return cardDB;  
         
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
        return cardDb;
    }
};

module.exports = cardModel;