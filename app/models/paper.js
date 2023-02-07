const client = require("./dbClient");
const { cpSync } = require("fs");

const paperModel = {
    async findByTitle(description){
        try{
            const sqlQuery = `SELECT * FROM paper WHERE description = $3;`;
            const values = [description];
            const result = await client.query(sqlQuery, values);
            return result.rows[0];

        }catch(err){
            console.log(err);
        }
    },
    async findAll(){
        let papers
        try{
            const result = await client.query("SELECT * FROM paper;");
            papers = result.rows;

        }catch(err){
            console.log(err);
        }

        return papers;
    },
    async insert(paper){
               
        try{
            const sqlQuery = "INSERT INTO paper(url, title, description) VALUES ($1, $2, $3) RETURNING *;";
            const values = [paper.url, paper.title, paper.description];

            const result = await client.query(sqlQuery,values);
            console.log(result);
            console.log(result.rows[0]);
          return result.rows[0];

        }catch(err){
            console.log(err);
        }

        
    },
    async findById(id){
        let paper;
        try{
            const sqlQuery = "SELECT * FROM paper WHERE id=$1;";
            const values = [id];
            const result = await client.query(sqlQuery,values);
            paper = result.rows[0];

        }catch(err){
            console.log(err);
        }
        return paper;
    },
    async update(paper){
        let paperDb;
        try{
            const values = [];                          // []=tableau contenant des valeurs =  url, member_id, id
            const parameters = [];                      // []=tableau contenant des parametres representant tout les:  noms de la propriété=$...ex:  url=$1, member_id = $2, ...etc
            let counter = 1;
            
            for(const key in paper){                    //"FOR IN" on lui envoi un objet "paper" puis  parcourt toutes les propriétés de member (url, member_id, id)

            if(key!="id"){                              // La propriété "id" permet de faire le WHERE id= (en ligne 82) et qui contient aussi ttes les propriétés qui viennent de req.body
                                                        // (key!="id") veut dire que ttes les proprietes qui sont differents de id...on les enregistres la valeur à l'interieur de values et les
                                                        // les requetes SQL (ex: $1=type) dans parametre.

            values.push(paper[key]);                     // paper[key] represente = "paper.url, paper.member_id,id"

            parameters.push(`${key}=$${counter}`);      //${key}=$${counter} represente: $1=url +1 $2=member_id +1...etc 

            counter++;                                  // ajout de +1 à chaque $ 
            }
            }
            values.push(paper.id);

            // "JOIN" permet de prendre chaque élément du tableau et de venir les coller ensemble, 
            //pour former une chaîne de caractère, il les sépare d'une virgule.
            const sqlQuery = `UPDATE paper SET ${parameters.join()} WHERE id=$${counter} RETURNING *;`;
            // "RETURNING avec * ": permet de retourner tout les champs qui t'interessent de la ligne qui ont été modifié.
            // il retourne un objet qui represente tout les papers.

            const result = await client.query(sqlQuery,values);
            paperDb = result.rows[0];
        }
        catch(err){
            console.log(err);
        }

        return paperDb;
    },
    async delete(id){
       
        try{
            const sqlQuery = `DELETE FROM public.paper
            WHERE id=$1;`;
            const values = [id];
            const result = await client.query(sqlQuery,values);
            return result;
            // à voir ce que je remonte
            
        }catch(err){
            console.log(err);
        }

        return paperDb;
    }
};

module.exports = paperModel;