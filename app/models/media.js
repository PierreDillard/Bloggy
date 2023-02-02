const client = require("./dbClient");


const mediaModel = {
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
        let medias
        try{
            const result = await client.query("SELECT * FROM media;");
            medias = result.rows;

        }catch(err){
            console.log(err);
        }

        return medias;
    },
    async insert(media){
               
        try{
            const sqlQuery = "INSERT INTO media(type, url, member_id, card_id) VALUES ($1, $2, $3, $4) RETURNING *;";
            const values = [media.type, media.url, media.member_id, media.card_id];

            const result = await client.query(sqlQuery,values);
            console.log(result);
            console.log(result.rows[0]);
          return result.rows[0];
        }catch(err){
            console.log(err);
        }

        
    },
    async findById(id){
        let media;
        try{
            const sqlQuery = "SELECT * FROM media WHERE id=$1;";
            const values = [id];
            const result = await client.query(sqlQuery,values);
            media = result.rows[0];

        }catch(err){
            console.log(err);
        }
        return media;
    },
    async update(media){
        let mediaDb;
        try{
            const values = [];                          // []=tableau contenant des valeurs = type, url, member_id,card_id, id
            const parameters = [];                      // []=tableau contenant des parametres representant tout les:  noms de la propriété=$...ex: type=$1, url=$2, member_id = $3, ...etc
            let counter = 1;
            
            for(const key in media){                    //"FOR IN" on lui envoi un objet "media" puis  parcourt toutes les propriétés de member (type, url, type, member_id, card_id, id)

            if(key!="id"){                              // La propriété "id" permet de faire le WHERE id= (en ligne 82) et qui contient aussi ttes les propriétés qui viennent de req.body
                                                        // (key!="id") veut dire que ttes les proprietes qui sont differents de id...on les enregistres la valeur à l'interieur de values et les
                                                        // les requetes SQL (ex: $1=type) dans parametre.

            values.push(media[key]);                     // media[key] represente = "media.type, media.url, media.member_id, media.card_id, id"

            parameters.push(`${key}=$${counter}`);      //${key}=$${counter} represente: $1=type +1 = $2=url +1 $3=member_id...etc 

            counter++;                                  // ajout de +1 à chaque $ 
            }
            }
            values.push(media.id);

            // "JOIN" permet de prendre chaque élément du tableau et de venir les coller ensemble, 
            //pour former une chaîne de caractère, il les sépare d'une virgule.
            const sqlQuery = `UPDATE media SET ${parameters.join()} WHERE id=$${counter} RETURNING *;`;
            // "RETURNING avec * ": permet de retourner tout les champs qui t'interessent de la ligne qui ont été modifié.
            // il retourne un objet qui represente tout les medias.

            const result = await client.query(sqlQuery,values);
            mediaDb = result.rows[0];
        }
        catch(err){
            console.log(err);
        }

        return mediaDb;
    },
    async delete(id){
       
        try{
            const sqlQuery = `DELETE FROM public.media
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

module.exports = mediaModel;