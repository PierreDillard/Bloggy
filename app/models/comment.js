const client = require("./dbClient");
const { cpSync } = require("fs");

const commentModel = {
    async findByContent(content){
        try{
            const sqlQuery = `SELECT * FROM comment WHERE content = $1;`;
            const values = [content];
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
               
        try{
            const sqlQuery = "INSERT INTO comment(author,member_id, card_id, content) VALUES ($1, $2, $3,$4) RETURNING *;";
            const values = [comment.author, comment.member_id, comment.card_id, comment.content];
            
            const result = await client.query(sqlQuery,values);
            console.log(result);
            console.log(result.rows[0]);
          return result.rows[0];
          
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
    async update (comment) {
        let commentDb;
        try{
            const values = [];                          // []=tableau contenant des valeurs = author, member_id, card_id, content, id
            const parameters = [];                      // []=tableau contenant des parametres representant tout les:  noms de la propriété=$...ex: author= $member_id=$1, card_id=$, content= $, ...etc
            let counter = 1;
            
            for(const key in comment){                     // "FOR IN" on lui envoi un objet "comment" puis  parcourt toutes les propriétés de comment (author, member_id, card_id, id)

            if(key!="id"){                              // La propriété "id" permet de faire le WHERE id= (en ligne 82) et qui contient aussi ttes les propriétés qui viennent de req.body
                                                        // (key!="id") veut dire que ttes les proprietes qui sont differents de id...on les enregistres la valeur à l'interieur de values et les
                                                        // les requetes SQL (ex: $2=member_id) dans parametre.

            values.push(comment[key]);                  // card[key] represente = "comment.author, comment.member_id, comment.card_id, comment.content, comment.id"

            parameters.push(`${key}=$${counter}`);      //${key}=$${counter} represente: $2=member_id +1 = $3=card_id +1 $4=content...etc 

            counter++;                                  // ajout de +1 à chaque $ 
            }
            }
            values.push(comment.id);

            // "JOIN" permet de prendre chaque élément du tableau et de venir les coller ensemble, 
            //pour former une chaîne de caractère, il les sépare d'une virgule.
            const sqlQuery = `UPDATE comment SET ${parameters.join()} WHERE id=$${counter} RETURNING *;`;
            // "RETURNING avec * ": permet de retourner tout les champs qui t'interessent de la ligne qui ont été modifié.
            // il retourne un objet qui represente tout les comments.

            const result = await client.query(sqlQuery,values);
            commentDb = result.rows[0];
        }
        catch(err){
            console.log(err);
        }

        return commentDb;     
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
        return commentDb;
    }
};

module.exports = commentModel;