const client = require("./dbClient");
const { cpSync } = require("fs");

const labelModel = {
    async findByContent(content){
        try{
            const sqlQuery = `SELECT * FROM label WHERE content = $1;`;
            const values = [content];
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
            console.log(result);
            console.log(result.rows[0]);
          return result.rows[0];
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
        let labelDb;
        try{
            const values = [];                          // []=tableau contenant des valeurs = content, media_id, id
            const parameters = [];                      // []=tableau contenant des parametres representant tout les:  noms de la propriété=$...ex: content=$1, media_id=$2, ...etc
            let counter = 1;
            
            for(const key in label){                     // "FOR IN" on lui envoi un objet "label" puis  parcourt toutes les propriétés de label (content, media_id, id)

            if(key!="id"){                              // La propriété "id" permet de faire le WHERE id= (en ligne 82) et qui contient aussi ttes les propriétés qui viennent de req.body
                                                        // (key!="id") veut dire que ttes les proprietes qui sont differents de id...on les enregistres la valeur à l'interieur de values et les
                                                        // les requetes SQL (ex: $1=peudo) dans parametre.

            values.push(label[key]);                     // member[key] represente = "member.content, member.media_id, member.id"

            parameters.push(`${key}=$${counter}`);      //${key}=$${counter} represente: $1=content +1 = $2=media_id +1 $3=id...etc 

            counter++;                                  // ajout de +1 à chaque $ 
            }
            }
            values.push(label.id);

            // "JOIN" permet de prendre chaque élément du tableau et de venir les coller ensemble, 
            //pour former une chaîne de caractère, il les sépare d'une virgule.
            const sqlQuery = `UPDATE label SET ${parameters.join()} WHERE id=$${counter} RETURNING *;`;
            // "RETURNING avec * ": permet de retourner tout les champs qui t'interessent de la ligne qui ont été modifié.
            // il retourne un objet qui represente tout les labels.

            const result = await client.query(sqlQuery,values);
            labelDb = result.rows[0];
        }
        catch(err){
            console.log(err);
        }
        return labelDb;
    },
    async delete(id){
       
        try{
            const sqlQuery = `DELETE FROM public.label
            WHERE id=$1;`;
            const values = [id];
            const result = await client.query(sqlQuery,values);
           return result;
            // à voir ce que je remonte
            
        }catch(err){
            console.log(err);
        }
        return labelDb;
    }
};

module.exports = labelModel;