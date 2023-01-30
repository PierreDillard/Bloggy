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
        let mediaDB;
        try{
            // const sqlQuery = `UPDATE public.media
            // SET route=$1, media=$2
            // WHERE id=$3 RETURNING *;`;
            // const values = [media.route,label.media,id];

            const sqlQuery = "SELECT * FROM update_media($1)";
            const values = [media];

            const result = await client.query(sqlQuery,values);
            mediaDB = result.rows[0];

        }catch(err){
            console.log(err);
        }

        return mediaDB;
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

        return;
    }
};

module.exports = mediaModel;